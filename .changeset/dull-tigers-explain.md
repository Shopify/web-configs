---
'@shopify/eslint-plugin': major
---

Remove the `@shopify/eslint-plugin/graphql` config and the dependency on `eslint-plugin-graphql` as it is outdated and unsupported. If you used the graphql config then you should migrate to [`@graphql-eslint/eslint-plugin`](https://www.npmjs.com/package/@graphql-eslint/eslint-plugin). We no longer provide recommended graphql config as it has a large install footprint and we do not want to push that onto consumers that do not use graphql.
