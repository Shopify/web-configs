---
'@shopify/eslint-plugin': major
---

Update typescript-eslint from `^7.9.0` to `^8.18.0`. Replace usage of the `@typescript-eslint/eslint-plugin` and `@typescript-eslint/eslint-parser` packages with using the new `typescript-eslint` package. See migration information at https://typescript-eslint.io/blog/announcing-typescript-eslint-v8.

The `@typescript-eslint/ban-types` rule has been removed and replaced with `@typescript-eslint/no-empty-object-type` and `@typescript-eslint/no-wrapper-object-types`. `@typescript-eslint/no-require-imports` is now enabled.
