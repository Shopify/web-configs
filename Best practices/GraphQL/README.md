# GraphQL

[GraphQL](https://graphql.org) is our preferred way of sharing persistent data across server and client. where JavaScript, TypeScript, and React form the language of our UIs, GraphQL is our language for data.

## Table of contents

1. [Purpose of this guide](#purpose-of-this-guide)
1. [Complementary packages](#complementary-packages)
1. [Client](#client)
1. [Organizing GraphQL documents](#organizing-graphql-documents)
1. [Performance](#performance)
1. [Types and code generation](#types-and-code-generation)
1. [Resources](#resources)

## Purpose of this guide

This guide covers Shopify’s approach to using GraphQL. It is complemented by our [GraphQL styleguide](../../Styleguides/GraphQL.md), which covers the stylistic parts of writing GraphQL documents. We also have a dedicated [GraphQL testing guide](./Testing.md).

## Complementary packages

GraphQL is heavily integrated into [Sewing Kit](https://github.com/Shopify/sewing-kit). You can read about the what Sewing Kit can do with GraphQL in the [GraphQL technology document](https://github.com/Shopify/sewing-kit/blob/master/docs/technologies/graphql.md) and [GraphQL plugin guide](https://github.com/Shopify/sewing-kit/blob/master/docs/plugins/graphql.md).

In addition to Sewing Kit’s GraphQL support, we have a number of GraphQL-specific packages that make it easier to use in your app:

* [@shopify/jest-mock-apollo](https://github.com/Shopify/quilt/blob/master/packages/jest-mock-apollo/README.md): a mock Apollo client that supports custom fixtures returned in response to operations
* [graphql-fixtures](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-fixtures): type-safe, randomly generated fixtures that match the shape of GraphQL documents

## Client

Developers should use the simplest GraphQL "client" that suits the needs of their application. For simple applications, or applications that do not benefit from a cache of previously-requested data, this might mean performing raw `fetch` calls to a GraphQL endpoint.

For more complex applications, we [recommend using Apollo](../../Decision%20records/02%20-%20Use%20Apollo%20as%20our%20GraphQL%20client). It offers an excellent balance of flexibility and built-in features for handling a wide variety of use cases.

### Where to construct a GraphQL client

The GraphQL client is an app-level concern, so it should be nested in the topmost component in your application. In a typical React application, you should strive for the following structure:

```tsx
// in app/foundation/App/graphql/client.ts
export default function createGraphQLClient() {}

// in app/foundation/App/graphql/index.ts
export {default} from './client';

// in app/foundation/App/App.tsx
import {ApolloProvider} from 'react-apollo';
import createGraphQLClient from './graphql';

export default function App({...props, children}) {
  return (
    <ApolloProvider client={createGraphQLClient(props)}>
      {children}
    </ApolloProvider>
  );
}
```

In server-rendered apps, you will usually need to pass the GraphQL client in to the application in order to preserve the fetched GraphQL data. In this case, you should accept the client as a prop on your app, and expose a function to create the client:

```tsx
// GraphQL client parts same as above...

// in app/foundation/App/App.tsx
import {ApolloProvider} from 'react-apollo';
import createGraphQLClient from './graphql';

interface Props {
  children: React.ReactNode;
  graphQLClient: ReturnType<typeof createGraphQLClient>;
}

export default function App({graphQLClient, children}: Props) {
  return (
    <ApolloProvider client={graphQLClient}>
      {children}
    </ApolloProvider>
  );
}

// in app/foundation/App/index.ts
export {default} from './App';
export {default as createGraphQLClient} from './graphql';

// in server/middleware/react.tsx
import App, {createGraphQLClient} from '../../app';

const app = <App graphQLClient={createGraphQLClient(options)} />;
```

In cases where parts of the GraphQL client must be shared, store them under `app/utilities/graphql`.

## Organizing GraphQL documents

The key to creating a maintainable GraphQL application is to have sensible policies for organizing your GraphQL queries and mutations. The recommendations below will help you maintain large applications without sacrificing our core principle of [isolation over integration](../../Principles/4%20-%20Isolation%20over%20integration):

* [Use dedicated GraphQL files](../../Decision%20records/08%20-%20We%20use%20dedicated%20files%20to%20store%20GraphQL%20documents) instead of GraphQL template literals embedded in component files.

* GraphQL documents should only contain a single query or mutation. This makes it easier to keep a sensible naming scheme for GraphQL files, and makes GraphQL documents easier to find.

* [Avoid fragments as a way of declaring data needs](../../Decision%20records/09%20-%20We%20do%20not%20use%20fragments%20tied%20to%20React%20components) for components that do not have dedicated GraphQL queries. Instead, use prop types to declare the shape of the data your component needs, just as you would for other "dumb" components. Fragments are still good for organizing shared bits of data for multiple places in a single query.

* GraphQL files are the private responsibility of a single component. Components should not reach into another component to grab its GraphQL query for any reason. This is usually done to gain access to individual types from the query when declaring a subcomponent’s prop types. Instead of doing this, you should declare a "dumb" version of the types your component expects, and rely on TypeScript to verify that the parent is passing in the right:

  ```ts
  // bad
  import {ComponentQueryData} from '../Parent/graphql/ComponentQuery.graphql';

  interface Props {
    products: ComponentQueryData.ProductsEdgesNode[];
  }

  // good
  interface Product {
    id: string;
    title: string;
  }

  interface Props {
    products: Product[];
  }
  ```

* Push mutations down to the lowest component possible. When these components need additional data (like variables or cache update functions), pass this data down as props.

* Queries that need to be completed on the initial render should live on the top-level "page" component. Queries that only need to be run in response to user input (Autocompletes, Modals, etc) can live further down in the tree, like mutations.

  > Note: Many developers feel uncomfortable when they first see this approach, as it pushes many responsibilities into a single component. However, it prevents nested GraphQL queries that would have to resolve in sequence, which can hurt performance. It also helps enforce a nice architectural property: having few "smart" components (connected to GraphQL), and many "dumb" ones (that accept GraphQL-fetched data through props).

## Performance

The biggest impact a Web Developer has on user experience will usually be how they handle GraphQL data. Smart handling of data can lead to pages that feel instant, while bad handling of data can lead to a sea of spinners and long page loads. Here are a few tips for getting the performance out of GraphQL and Apollo:

* Avoid nested queries that always run. Developers usually show some loading UI while a GraphQL query is in a `loading` state. If you have nested queries that always run, this creates a waterfall effect: GraphQL queries lower in the tree have to wait until their parents are finished. You can resolve this by:

  1. Skipping GraphQL queries wherever you can; less network traffic is always better!
  2. Find a way to render components that will need to run GraphQL queries while their parent is loading. You can often render them in a hidden element if you don’t want to show any loading UI.

## Types and code generation

Typescript and GraphQL combine to let us access our data with type safety. Developers should make use of the types generated alongside GraphQL documents [`graphql-typescript-definitions`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-typescript-definitions). Developers should also use the generated types and enums created by [`graphql-typescript-definitions`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-typescript-definitions#schema-types) instead of manually hardcoding these types into their app.

## Resources

We recommend reviewing the resources on the official [GraphQL community page](https://graphql.org/community/), which includes links to excellent GraphQL blogs, books, videos, and more.
