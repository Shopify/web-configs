# GraphQL Testing

This guide will discuss strategies for testing GraphQL-connected applications. It does not go over strategies for testing GraphQL APIs themselves, or for non-UI uses of GraphQL APIs. For the purposes of this guide, we may use React examples to illustrate best practices, but these recommendations should apply to all client-side uses of GraphQL.

## Strategy

There are two general approaches we could use when it comes to testing GraphQL:

1. Mocking out the connection our components have to the GraphQL part of the app and directly injecting GraphQL responses into our components
1. Mocking out only the GraphQL responses and leaving the GraphQL connections in place

There are pros and cons to both approaches. The first is more in line with how we test other parts of the app; as noted in our [React testing guide](../React/Testing.md), we generally mock out children components and manually trigger their properties as a way of maintaining strict isolation between component boundaries. However, this approach works best when the process being mocked is simple, as it typically is with a "managed" subcomponent that only exposes a `value`/ `onChange` set of props.

In the case of GraphQL, the process is generally more complex. There are many different states that the GraphQL infrastructure is responsible for orchestrating, and there are often side effects that are important to verify, like updating the cache in response to a mutation. There are also many different ways of connecting to GraphQL; in the case of Apollo, our [preferred GraphQL client](../../Decision%20records/02%20-%20Use%20Apollo%20as%20our%20GraphQL%20client.md), there are decorators, `Query`/ `Mutation` components, and direct uses of the Apollo client instance.

Based on our experience, we favor the second approach noted above: mocking out GraphQL responses, but leaving the infrastructure for connecting to GraphQL un-mocked.

## Test infrastructure

In order to implement the recommendation above, an application needs a way of injecting fake GraphQL responses into their application. We have a package that makes this easy to achieve for applications using Apollo: [`@shopify/jest-mock-apollo`](https://github.com/Shopify/quilt/tree/master/packages/jest-mock-apollo). This module exposes a factory for creating mock GraphQL clients that support hardcoded responses, including error responses, and waiting for GraphQL operations to resolve. Typically, we use this package to expose a GraphQL client creator function from the `tests/utilities` directory, allowing all parts of the app to easily import it:

```ts
// in tests/utilities.tsx
import createGraphQLClientFactory from '@shopify/jest-mock-apollo';

// Import and create your schema. Sewing Kit will automatically
// download a version of the schema you have configured in to
// a /build directory.
let schema;
export const createGraphQLClient = createGraphQLClientFactory({schema});

// in some test file
import {createGraphQLClient} from 'tests/utilities';

const graphQLClient = createGraphQLClient({
  OperationName: new Error('something went wrong'),
  AnotherOperation: {someField: 'value'},
});
```

You can see details about this package at the link above. We recommend that you create a GraphQL client for *each* test to avoid any state leaking between tests. It can be useful to have a custom `mount` (or equivalent for non-React/-Enzyme projects) that accepts the GraphQL client as an option, and then injects it into the component under test:

```ts
// in tests/utilities.tsx
import {mount as originalMount} from 'enzyme;
import {ApolloProvider} from 'react-apollo';

interface Options {
  graphQLClient?: ReturnType<typeof createGraphQLClient>;
}

export function mount(
  element: React.ReactElement<any>,
  {graphQLClient = createGraphQLClient()}
) {
  return originalMount(
    <ApolloProvider client={graphQLClient}>
      {element}
    </ApolloProvider>,
  );
}

// in some test file
import {mount, createGraphQLClient} from 'tests/utilities';

describe('<MyComponent />', () => {
  it('renders an empty state when there is no product', async () => {
    const graphQLClient = createGraphQLClient({
      Product: {product: null},
    });
    const myComponent = mount(<MyComponent />, {graphQLClient});
    await Promise.all(graphQLClient.graphQLResults);
    expect(myComponent).toContainReact(<EmptyState />);
  });

  it('renders the ID of a product when it exists', async () => {
    const id = '123';
    const graphQLClient = createGraphQLClient({
      Product: {product: {id}},
    });
    const myComponent = mount(<MyComponent />, {graphQLClient});
    await Promise.all(graphQLClient.graphQLResults);
    expect(myComponent).toContainText(id);
  });
});
```

The custom mount function can be useful in other ways; you can make it asynchronous and automatically resolve all the initial GraphQL, or you can accept additional arguments for things like a mock router.

## Mock data

Once you have the above infrastructure in place, the next step is to provide suitable example data for the case under test. As noted in our [decision record on the topic](../../07%20-%20We%20use%20factories%20instead%20of%20fixtures%20for%20GraphQL%20tests), we prefer factories over fixtures for supplying this data. We provide a package that can do this with type safety, [`graphql-fixtures`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-fixtures). Once this module is initialized with your schema, it can take a query or mutation and, optionally, a subset of the data, and will fill out the rest of the query with appropriate data.

```ts
// As with the GraphQL client factory detailed above,
// we recommend exposing the `fillGraphQL` function
// from a central test utilities directory.
import {createFiller} from 'graphql-fixtures';
const fillGraphQL = createFiller(schema);

// in a test file
const data = fillGraphQL(someQuery, {partial: 'data'});
```

This model for filling in data allows you to specify only a subset of data that is relevant for the case under test. This allows more information to be added to the query without having to update every test relying on that query, focuses the reader on the information that is relevant for the case under test, and enables more tailored data for each test. It illustrates our preference for [isolation over integration](../../Principles/4%20-%20Isolation%20over%20integration), and for [tests working well in isolation](../Testing#tests-should-work-and-be-useful-in-isolation).

There are a few things you should keep in mind when using this kind of data factory:

* Only fill the smallest subset of data you actually need for the case under test.

* Do not share a fixture directly between tests. It encourages the exact same anti-pattern as fixture files: encoding all cases needed by every test sharing the fixture. Where you need some shared subset, use a function that calls `fillGraphQL`:

  ```ts
  // When importing a GraphQL file, Sewing Kit will automatically
  // generate a "smart" deep partial version of the data, which
  // can be used as a type for this kind of function.
  import myQuery, {MyQueryPartialData} from '../graphql/MyQuery.graphql';

  function createMyQueryData(partial: MyQueryPartialData = {}) {
    return fillGraphQL(myQuery, {
      ...partial,
      field: {
        ...partial.field,
        shared: 'value',
      },
    });
  }
  ```

* When you have some set of the query that must be filled out for a large set of tests, use the same pattern as above to remove the shared bits to refocus the individual tests on the data that is actually relevant. This can be the case when there is some guarantee on the data that can't be codified in the type system. For example, we may provide a default filler that always provides at least one variant for a filled product response.

* Do not reference data off of the filled fixture. Instead, store the values you care about separately from the fixture and reference those in your assertion.

  ```ts
  // bad
  const data = fillGraphQL(myQuery);
  const graphQLClient = createGraphQLClient({MyQuery: data});
  const myComponent = mount(<MyComponent />, {graphQLClient});
  expect(myComponent).toContainText(data.product.id);

  // good
  const id = composeGid('Product', 123);
  const data = fillGraphQL(myQuery, {product: {id}});
  const graphQLClient = createGraphQLClient({MyQuery: data});
  const myComponent = mount(<MyComponent />, {graphQLClient});
  expect(myComponent).toContainText(id);
  ```

## Anti-patterns

A few common approaches are generally considered anti-patterns based on the recommendations above:

* Mocking out any part of the GraphQL stack:

  ```ts
  // Here, we are mocking out Apollo's GraphQL decorator with one that
  // just returns the component without any decoration, usually in order
  // to manually pass data directly to the component in test.
  jest.mock('react-apollo', () => ({
    graphql() { return (Component) => Component; } 
  }));
  ```

* Exporting an "undecorated" version of the component alongside the decorated one, just for the purposes of testing the underlying component through direct passing of data:

  > Note: this also violates a core principle of testing: we should not be changing our API just for the purposes of testing.

  ```ts
  // MyComponent.tsx
  export function MyComponent({data}) {
    return data.loading ? <div>loading</div> : null;
  }

  export default graphql(myQuery)(MyComponent);

  // MyComponent.test.tsx
  import {MyComponent} from '../MyComponent';

  const myComponent = <MyComponent data={{loading: true}} />;
  ```
