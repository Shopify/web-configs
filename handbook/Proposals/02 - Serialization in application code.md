# Proposal: pushing serialization into application code

## Problem

Right now, serialization of data that needs to be communicated from server => client is a complicated process:

1. The server needs to get access to the data, meaning it absolutely must have access to whatever "manager" stores the state that will need to be serialized. In the case of Web, this means that the server needs to construct the Redux store, GraphQL client, i18n manager, and a few other random managers.
2. The server needs to know how to pull out all of this data out of the various managers after it has rendered the app.
3. The server needs to serialize the data *outside* of the application (serializing within the app code itself would mean the client would also need to do it or would invalidate part of the server-rendered markup). At the time of this proposal, we do this with a `data` prop on `@shopify/react-html`’s `HTML` component, which takes an object with serialization ID to serialized data pairs.
4. The client needs to know what IDs the server used to serialize and deserialize the data during the client rehydration (at the time of this proposal, we use a `getSerialized` function from `@shopify/react-serialize` for this purpose).
5. The client needs to reconstruct all the same managers as the server did and rehydrate them with the data it deserialized.

This process isn’t just complicated, it’s actively problematic. We get no type safety — we have no real way of having confidence that the ID the client used to find serialized data corresponds to the one the server used.

Worse than that, though, is the problematic architecture it imposes. Anything that needs any concept of server => client serialization needs to push the logic to two entirely shared spots: the server and client entry points (these entry points have become almost unreadable in Web). Features that must be pushed to the client and server entry points are also terrible for performance, because the entire weight of those libraries will end up as part of the "main" bundles that everyone must download. This also violates our principle of [isolation](../Principles), as the user of a given library is completely separate from the logic that manages the data for that feature.

## Solution

The best case for performance and isolation is always to have responsibilities be owned by components. When components own the process of serializing and deserializing their own data, it allows code to be removed from the main bundle (if that component is in some other asynchronously-loaded bundle), and promotes strong isolation by keeping related code together. To do this, we will need to give components a way of declaring the data they want to serialize, a mechanism for including that in the HTML response, and a component for getting the deserialized output.

### API Sketch

We can get type safety and isolation for the React part of this solution in a similar way to how React’s native context API works:

```ts
// This component must return a thunk for the data so that we
// can call it at a time after the server render would have
// "filled in" whatever the stateful piece of the library was
function Serialize<T>(props: {data: () => T}): null;

function WithSerialized<T>(props: {children(data: T | undefined) => React.ReactNode}): React.ReactNode;

// ID is just for a consistent ID that can also be used to
// find the serialized element in the HTML
export function createSerializer<T>(identifier: string): {
  Serialize: Serialize<T>,
  WithSerialized: WithSerialized<T>,
}
```

This covers both the serialization and deserialization. The general pattern would be for a component to render a `WithSerialized`, use the value to hydrate a stateful part of the app, or construct a "fresh" version if no serialized data was found (as would be the case on the first server render). They would then render a `<Serialize />` that serializes the stateful part of the app:

```tsx
// Example using react-i18n

import {createSerializer} from '@shopify/react-serialize-next';
import {Provider, Manager} from '@shopify/react-i18n-next';

interface Props {
  locale: string;
  children: React.ReactNode;
}

const {Serialize, WithSerialized} = createSerializer<ReturnType<Manager['extract']>>('i18n');

export default function I18n({locale, children}: Props) {
  return (
    <WithSerialized>
      {(translations) => {
        const manager = new Manager({locale}, translations);

        return (
          <>
            <Provider manager={manager}>{children}</Provider>
            <Serialize
              data={() => ({
                locale: manager.details.locale,
                translations: manager.extract(),
              })}
            />
          </>
        );
      }}
    </WithSerialized>
  );
}
```

This could feel even more elegant with React hooks:

```tsx
// Example using react-i18n

import {useSerialized} from '@shopify/react-serialize-next';
import {Provider, Manager} from '@shopify/react-i18n-next';

interface Props {
  locale: string;
  children: React.ReactNode;
}

export default function I18n({locale, children}: Props) {
  const [translations, Serialize] = useSerialized<ReturnType<Manager['extract']>>('i18n');

  const manager = new Manager({locale}, translations);

  return (
    <>
      <Provider manager={manager}>{children}</Provider>
      <Serialize
        data={() => ({
          locale: manager.details.locale,
          translations: manager.extract(),
        })}
      />
    </>
  );
}
```

The final part of this solution would be to have some mechanism for actually persisting the serializations into the HTML document on the server, and extracting them on the client. This is a natural fit for an app-wide provider (yes, it’s a bit ironic to use an app-wide provider to replace app-wide providers, but this would be the only one that is needed instead of a continuously growing list of them):

```tsx
const manager = new SerializationManager(); // would need one for the browser, one for the server

<SerializationProvider manager={manager}>
  <RestOfApp />
</SerializationProvider>
```
