# Prefer buildClientSchema (typescript-prefer-build-client-schema)

Enforces [buildClientSchema](https://graphql.org/graphql-js/utilities/#buildclientschema) to `buildSchema` for performance within TypeScript code.

## Rule Details

This rule recommends all schema building through `buildClientSchema` as opposed to `buildSchema`. A warning will occur if the `buildSchema` is used.

The difference between both is that [buildClientSchema](https://graphql.org/graphql-js/utilities/#buildclientschema) uses the result from the introspection query (`.json`) to build the schema whereas [buildSchema](https://graphql.org/graphql-js/utilities/#buildschema) uses the GraphQL schema language file (`.grapqhl`) to create the GraphQL schema instance.

Examples of **incorrect** code for this rule:

```ts
import {buildSchema} from 'graphql';

export function loadSchemaAndTypes(projectName: string) {
  return {
    schema: buildSchema(
      readFileSync(resolve(basePath, `${projectName}.graphql`), 'utf8'),
    ),
    ...
  }
}
```

Examples of **correct** code for this rule:

```ts
import {buildClientSchema} from 'graphql';

export function loadSchemaAndTypes(projectName: string) {
  return {
    schema: buildClientSchema(
      JSON.parse(readFileSync(resolve(basePath, `${projectName}.json`), 'utf8'))
        .data,
    ),
    ...
  }
}
```

## When Not To Use It

If you have clear reason for using `buildSchema` and understand the performance tradeoffs, you can safely disable this rule.
