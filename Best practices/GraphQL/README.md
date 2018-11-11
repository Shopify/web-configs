# GraphQL

[GraphQL](https://graphql.org) is our preferred way of sharing persistent data across server and client. GraphQL will likely end up being among the most important parts of any given application; where JavaScript, TypeScript, and React form the language of our UIs, GraphQL is our definitive language for data.

## Table of contents

1. [Purpose of this guide](#purpose-of-this-guide)
1. [Complementary packages](#complementary-packages)
1. [Client](#client)
1. [Organizing GraphQL documents](#organizing-graphql-documents)
1. [Types and code generation](#types-and-code-generation)
1. [Resources](#resources)

## Purpose of this guide

This guide covers a set of flexible, scalable approaches to using GraphQL. It is complemented by our [GraphQL styleguide](../../Styleguides/GraphQL.md), which covers the stylistic concerns around writing GraphQL documents. We also have a dedicated [GraphQL testing guide](./Testing.md), given the complexity of that topic.

## Complementary packages

GraphQL is heavily integrated into Sewing Kit; it is capable of downloading schemas, generating types, handling imports of GraphQL documents, linting/ formatting GraphQL documents, and verifying GraphQL fixtures. You can read more in Sewing Kit’s [GraphQL technology document](https://github.com/Shopify/sewing-kit/blob/master/docs/technologies/graphql.md) and [GraphQL plugin guide](https://github.com/Shopify/sewing-kit/blob/master/docs/plugins/graphql.md).

In addition to Sewing Kit’s handling of GraphQL, we have a number of GraphQL-specific packages that make it easier to handle GraphQL in your app:

* [@shopify/jest-mock-apollo](https://github.com/Shopify/quilt/blob/master/packages/jest-mock-apollo/README.md): a mock Apollo client that supports custom fixtures returned in response to operations
* [graphql-fixtures](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-fixtures): type-safe, randomly generated fixtures that match the shape of GraphQL documents

## Client

Developers should use the simplest GraphQL "client" that suits the needs of their application. For simple applications, or applications that do not benefit from a cache of previously-requested data, this can mean simply performing `fetch` calls to a GraphQL endpoint.

For more complex applications, we [recommend using Apollo](../../Decision%20records/02%20-%20Use%20Apollo%20as%20our%20GraphQL%20client). It offers an excellent balance of flexibility and built-in features for handling a wide variety of use cases.

### Where to construct a GraphQL client

When a more complex GraphQL client is needed, it is usually a singleton, and is the responsibility of the overall application. As such, it should be nested underneath the topmost component in your application. In a typical React application, the following structure would be expected:

```ts
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

In the case of server-rendered apps, you will usually need to pass the GraphQL client in to the application in order to preserve the fetched GraphQL data. To do so, export the GraphQL factory function from the app and accept an initialized GraphQL client as a prop on the app:

```ts
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

The key to creating a maintainable GraphQL application is to have sensible policies for organizing your GraphQL queries and mutations. The points below have proven effective at maintaining larger applications without sacrificing our core principle of [isolation over integration](../../Principles/4%20-%20Isolation%20over%20integration).

* [Use dedicated GraphQL files](../../Decision%20records/08%20-%20We%20use%20dedicated%20files%20to%20store%20GraphQL%20documents) instead of GraphQL template literals embedded within component files.

* GraphQL documents should only contain a single query or mutation. This makes it easier to keep a sensible naming scheme for GraphQL files, and makes GraphQL documents easier to find.

* [Avoid fragments as a way of declaring data needs](../../Decision%20records/09%20-%20We%20do%20not%20use%20fragments%20tied%20to%20React%20components) for components that do not have dedicated GraphQL queries. Instead, use prop typings to declare an appropriate shape of the data your component needs, just as you would for other "dumb" components. Fragments are still appropriate for organizing shared bits of data for multiple places within a single query, or for query-mutation pairs.

* GraphQL files are the private responsibility of a single component. Components should not reach into another component to grab its GraphQL query for any reason. This is often done simply to gain access to individual types from the query when declaring a subcomponent’s property types. Instead of doing this, a developer should declare a "dumb" version of the types its component expects, and rely on TypeScript to ensure that the parent is passing in a query result that conforms to this shape:

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

* Push mutations down to the lowest component possible. Where these components need additional details (variables for the mutation, or additional data to properly update the cache in response to a mutation result), pass this data down as props.

* The placement of queries in the app is quite a bit more nuanced. In general, we favor placing a single query around the "page" component that handles any parts of the page that must be available for the initial render. More components may have GraphQL queries, but they should only be around components that do not immediately need data (autocompletes, modals, etc), and can therefore be skipped on the initial render.

  This approach is sometimes less than ideal for the architecture of the page, as it pushes many responsibilities into a single component. However, it is more performance conscious given that it prevents nested GraphQL queries that would have to resolve in sequence (which is particularly problematic for the server render). It also helps enforce one beneficial architectural property: having few "smart" components (connected to GraphQL), and many "dumb" ones (that simply accept GraphQL-fetched data through props).

## Types and code generation

One of the great benefits of using both GraphQL and TypeScript is the ability to use strongly typed data querying in our app. Developers should make use of this wherever possible. In particular, developers should use the generated types and enums created by [`graphql-typescript-definitions`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-typescript-definitions#schema-types) (run automatically as part of `sewing-kit`) instead of manually hardcoding these types into their app.

## Resources

We recommend reviewing the resources on the official [GraphQL community page](https://graphql.org/community/), which includes links to excellent GraphQL blogs, books, videos, and more.
