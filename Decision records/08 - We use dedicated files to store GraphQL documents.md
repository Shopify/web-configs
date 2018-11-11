# We use dedicated files to store GraphQL documents

## Date

November 11, 2018

## Contributors

* Chris Sauvé
* Mallory Allen
* Tzvi Melamed
* Matt Seccafien
* Ismail Syed
* Gord Pearson

## Summary

We prefer organizing our GraphQL documents into `.graphql` files. This method is preferred to embedding GraphQL documents in component files using template literals, and over creating dynamic GraphQL documents.

## Community

The [`graphql-tag`](https://github.com/apollographql/graphql-tag) package is the community standard for creating GraphQL documents in JavaScript applications. This package supports both inline documents (using the `gql` template literal tag) and external GraphQL documents (using the `graphql-tag/loader` Webpack loader). While neither is clearly indicated as a preference on the package’s documentation, anecdotally most examples and instruction videos use the `gql` tag given its more "plug and play" behaviour.

The [official GraphQL documentation](https://graphql.org/learn/) does not provide any guidance here, but does show all examples using the GraphQL SDL (schema definition language).

## Elsewhere at Shopify

Our mobile apps are also heavy users of GraphQL, so it makes sense to look to them for inspiration. The original versions of the app relied on code-generated libraries that offered expressive, dynamically-constructed GraphQL queries. However, the apps have since started to process of converting to static, standalone GraphQL documents.

## Decision

### Static versus dynamic

While dynamic GraphQL documents theoretically offer the most flexibility in constructing the necessary queries/ mutations, they are strongly discouraged. Static GraphQL documents, where the query is entirely written out ahead of time, and makes use of [GraphQL variables](https://graphql.org/learn/queries/#variables) for dynamism, is preferred for many reasons:

* They are easier to understand at a glance due to being [declarative instead of imperative](../Principles/6%20-%20Declarative%20over%20imperative)
* They are inherently more type safe given that the shape of the document is knowable at build time
* They follow more closely to the way the community teaches GraphQL, and the way the primary clients (Apollo and Relay) expect to receive GraphQL documents

### Dedicated versus embedded

As discussed earlier, most guides prefer to show embedded GraphQL documents using the `gql` template literal tag. This method has several key benefits:

* It requires no additional configuration (in comparison, dedicated GraphQL files require both a [Webpack loader](https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader) and a [Jest loader](https://github.com/remind101/jest-transform-graphql), though these are handled automatically by Sewing Kit)
* It reduces the amount of flipping between files a developer must do to understand the full nature of a component, which is particularly useful for smaller components

However, we believe that dedicated GraphQL files offer many more benefits. Not only is this approach consistent with mobile, but it also provides the following attractive features:

* No GraphQL runtime is required, which can remove a significant chunk of bundle size (template literals can be precompiled, but it requires [additional configuration](https://github.com/gajus/babel-plugin-graphql-tag))
* It offers a much nicer hook for inserting code generated types (because GraphQL files must be imported, we can create sibling `.d.ts` files that export the required types. In contrast, inline queries offer no obvious place to insert such types)
* Easier syntax highlighting, since JavaScript/ TypeScript files do not have a separate embedded language (some editors, like VSCode, do support syntax highlighting for inline template literals, but it is not as widespread in other editors)
* It is consistent with our approach to styling, where dedicated files are also used
* It is easier to share fragments, as dedicated GraphQL files can import other GraphQL files
