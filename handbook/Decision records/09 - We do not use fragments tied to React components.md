# We do not use fragments tied to React components

## Date

November 11, 2018

## Contributors

* Chris Sauvé
* Mallory Allen
* Tzvi Melamed
* Matt Seccafien

## Summary

We avoid using fragments for sharing the data needs of a leaf component with its parents. Components should write types for their props as they would normally with plain TypeScript. They may rely on types created from their parent's GraphQL queries to ensure that the parent is passing them safely-typed props.

## Community

There is no clear standard in the community around how GraphQL fragments should be used. However, one of the two big GraphQL client frameworks, Relay, makes heavy use of [fragments as a mechanism for declaring data needs](https://facebook.github.io/relay/docs/en/fragment-container.html).

The official documentation about fragments does not discuss them specifically as a means to share GraphQL needs from a child to a parent. Instead, it discusses them primarily in the context of [reducing repetition](https://graphql.org/learn/queries/#fragments) in GraphQL documents.

## Decision

Based on our experience with using GraphQL fragments, there are many downsides that make fragments ill suited to indicating data needs:

* It is not clear how a component should "import" a fragment from another component; any mechanism for doing this feels like it violates the principle of component isolation

* It blurs the line between "smart" components (those that are connected to GraphQL) and "dumb" components (those that simply render UI)

* The types generated for the fragment end up including some details that the component does not strictly need (most notably, `__typename` fields, which are automatically added by most of our GraphQL tools). This is particularly problematic in the context of providing fixture data to the component; in practice, it often resulted in developers either manually writing data with type names, or writing data without typenames and casting them to the appropriate type:

  ```tsx
  // Neither of these are particularly desirable:
  const myComponent = (
    <MyComponent
      dataFromFragment={{
        __typename: 'Product',
        title: 'Concrete box',
        variants: {
          __typename: 'ProductVariantConnection',
          edges: [
            {
              __typename: 'ProductVariantEdge',
              node: {
                __typename: 'ProductVariant',
                title: 'Concrete box (large)',
              },
            },
          ],
        },
      }}
    />
  );

  const myComponent = (
    <MyComponent
      dataFromFragment={{
        title: 'Concrete box',
        variants: {
          edges: [
            {
              node: {
                title: 'Concrete box (large)',
              },
            },
          ],
        },
      } as any}
    />
  );
  ```

* They can’t declare arguments, so their use of variables becomes very awkward as they must rely on an implicit contract with the query/ mutation to include an appropriate argument declaration

* They end up as part of the same global namespace of GraphQL document names, which can be problematic when the number of fragments increases

Components in a React app already have a mechanism for declaring their data needs: prop types. This allows a component the stay "dumb" to how the data is fetched, but still maintains safety, as the component rendering yours must fetch the right data from GraphQL to satisfy the types you have specified.

```ts
// in components/Seo/Seo.tsx
interface Props {
  seoTitle: string;
  seoDescription: string;
}

export default function Seo(props: Props) {}
```

```graphql
# in graphql/ProductQuery.graphql
query Product($id: ID!) {
  product(id: $id) {
    seo {
      title
      description
    }
  }
}
```

```tsx
// in Product.tsx
import productQuery from './graphql/ProductQuery.graphql';
import {Seo} from './components';

// Assuming `data` was populated from the productQuery by a
// library like Apollo:
export default function Product({data}) {
  return (
    <Seo
      seoTitle={data.product.seo.title}
      seoDescription={data.product.seo.description}
    />
  );
}
```

Because we generate types for the GraphQL queries, we are still sure that the data the `Product` component is passing to `Seo` matches its expectations. At the same time, the `Seo` component is now able to present an elegant API for itself, rather than being restricted to the shape of the GraphQL API.
