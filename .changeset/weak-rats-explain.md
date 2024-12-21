---
'@shopify/eslint-plugin': major
---

Remove Babel parser and plugin.

The Babel plugin and parser are only useful when authoring JavaScript that uses syntax that has not yet reached stage 4 of the standardisation process.

We do not wish to encourage the usage of non-standard syntax in `.js` files as a default supported behaviour.

If you wish to continue to use non-standard syntax in `.js` files then you should add and configure `@babel/eslint-parser` and `@babel/eslint-plugin` yourself.

- ESLint v8's `semi` and `no-invalid-this` rules provide the behaviour that `@babel/semi`, `@babel/no-invalid-this` were introduced to solve, and thus the babel versions of these rules are no longer requried.
- `@babel/new-cap` exists to handle the non-standard decorator syntax.
- `@babel/object-curly-spacing` exists to handle non-standard `export x from "mod"` syntax.
- `@babel/no-unused-expressions` exists to handle non-standard "do expressions".

Remove all mentions of `@babel/*` rules in your eslint config unless you configure the babel plugin yourself.
