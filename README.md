# eslint-plugin-shopify

[![NPM version][npm-image]][npm-url]
[![Circle CI](https://circleci.com/gh/Shopify/eslint-plugin-shopify.svg?style=shield)](https://circleci.com/gh/Shopify/eslint-plugin-shopify)
[![David DM](https://david-dm.org/Shopify/eslint-plugin-shopify.svg)](https://david-dm.org/Shopify/eslint-plugin-shopify)

Shopify’s ESLint rules and configs.

## Installation

You'll first need to install [ESLint](http://eslint.org):

**With Yarn**

```bash
yarn add --dev eslint
```

**With npm**

```bash
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-shopify`:

**With Yarn**
```bash
yarn add --dev eslint-plugin-shopify
```

**With npm**
```bash
$ npm install eslint-plugin-shopify --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-shopify` globally.

## Usage

Shopify’s ESLint configs come bundled in this package. In order to use them, you simply extend the relevant configuration in your project’s `.eslintrc`. For example, the following will extend the ESNext (ES2015 and later) config:

```json
{
  "extends": "plugin:shopify/esnext"
}
```

If you are working on an ES5 project, extend the ES5 version of the configuration:

```json
{
  "extends": "plugin:shopify/es5"
}
```

You can also add some "augmenting" configs on top of the "core" config by extending an array of linting configs. For example, the following configuration would provide a base ESNext config that is augmented by a React config:

```json
{
  "extends": [
    "plugin:shopify/esnext",
    "plugin:shopify/react"
  ]
}
```

Likewise, if you are using TypeScript and React, the following configuration extends the TypeScript base config with the React-specific rules provided by the React configuration file. To demonstrate multiple augmentations, we've also added the Prettier config, which disables rules that will conflict in projects using prettier.

```json
{
  "extends": [
    "plugin:shopify/typescript",
    "plugin:shopify/react",
    "plugin:shopify/prettier",
  ]
}
```

## Provided configurations

This plugin provides the following core configurations:

- [esnext](lib/config/esnext.js): Use this for anything written with ES2015+ features.
- [typescript](lib/config/typescript.js): Use this for Typescript projects. The rules enabled in this confige do not require type-checking to run. To enable all Typescript rules, you must augment this config with the `typescript-type-checking` config mentioned below.
- [es5](lib/config/es5.js): Use this for legacy projects.

This plugin also provides the following tool-specific configurations, which can be used on top of the core configurations:

- [typescript-type-checking](lib/config/typescript-type-checking.js) Use this config to augment the `typescript` config to enable all TypeScript rules, including those that require type checking. These rules are slower to run and and you will need to specify a path to your tsconfig.json file in the "project" property of "parserOptions". The following example would provide all of the TypeScript rules, assuming the tsconfig.json is in the same directory as you ESlint configuration.

```json
{
  "extends": [
    "plugin:shopify/typescript",
    "plugin:shopify/typescript-type-checking"
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```
- [react](lib/config/react.js): Use this for React projects.
- [graphql](lib/config/graphql.js): Use this for projects that use [graphql-config](https://github.com/prisma/graphql-config) for graphql validation.
- [polaris](lib/config/polaris.js): Use this for projects that use [Shopify’s React Polaris components](https://polaris.shopify.com/components/get-started).
- [prettier](lib/config/prettier.js): Use [prettier](https://github.com/prettier/prettier) for consistent formatting. Extending this Shopify's prettier config will [override](https://github.com/prettier/eslint-config-prettier/blob/master/index.js) the default Shopify eslint rules in favor of prettier formatting. Prettier must be installed within your project, as eslint-plugin-shopify does not provide the dependency itself.
- [webpack](lib/config/webpack.js): Use this for projects built by [webpack](https://webpack.js.org/).

### node

If you are working on a node module, we also provide the [node configuration](lib/config/esnext.js) for you. Note that this configuration needs to be used in conjunction with one of the core configurations (either `es5` or `esnext`). If you plan to transpile your code using Babel, use the `esnext` config. If you do not plan to do so, the config you choose depends on the version of node you wish to support, and how many ESNext features are natively available in that version. You can see a detailed list of what version of node supports what new JavaScript features by visiting http://node.green.

A node project that will use Babel for transpilation would need the following ESLint config:

```json
{
  "extends": [
    "plugin:shopify/esnext",
    "plugin:shopify/node"
  ]
}
```

### Supported Typescript version

The version range of TypeScript currently supported by this plugin is `>=3.2.1 <3.8.0`. This is constrained by the [@typescipt-eslint parser support](https://github.com/typescript-eslint/typescript-eslint#supported-typescript-version).

## Plugin-Provided Rules

This plugin provides the following custom rules, which are included as appropriate in all core linting configs:

- [binary-assignment-parens](docs/rules/binary-assignment-parens.md): Require (or disallow) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
- [class-property-semi](docs/rules/class-property-semi.md): Require (or disallow) semicolons for class properties.
- [images-no-direct-imports](docs/rules/images-no-direct-imports.md): Prevent images from being directly imported.
- [jest/no-snapshots](docs/rules/jest/no-snapshots.md): Disallows jest snapshots.
- [jest/no-vague-titles](docs/rules/jest/no-vague-titles.md): Prevent the usage of vague words in test statements.
- [jsx-no-complex-expressions](docs/rules/jsx-no-complex-expressions.md): Disallow complex expressions embedded in in JSX.
- [jsx-no-hardcoded-content](docs/rules/jsx-no-hardcoded-content.md): Disallow hardcoded content in JSX.
- [jsx-prefer-fragment-wrappers](docs/rules/jsx-prefer-fragment-wrappers.md): Disallow useless wrapping elements in favour of fragment shorthand in JSX.
- [no-namespace-imports](docs/rules/no-namespace-imports.md): Prevent namespace import declarations.
- [no-useless-computed-properties](docs/rules/no-useless-computed-properties.md): Prevent the usage of unnecessary computed properties.
- [polaris-no-bare-stack-item](docs/rules/polaris-no-bare-stack-item.md): Disallow the use of Polaris’s `Stack.Item` without any custom props.
- [polaris-prefer-sectioned-prop](docs/rules/polaris-prefer-sectioned-prop.md): Prefer the use of the `sectioned` props in Polaris components instead of wrapping all contents in a `Section` component.
- [prefer-class-properties](docs/rules/prefer-class-properties.md): Prefer class properties to assignment of literals in constructors.
- [prefer-early-return](docs/rules/prefer-early-return.md): Prefer early returns over full-body conditional wrapping in function declarations.
- [no-ancestor-directory-import](docs/rules/no-ancestor-directory-import.md): Prefer imports from within a directory extend to the file from where they are importing without relying on an index file.
- [no-all-mocks-methods](docs/rules/no-all-mocks-methods.md): Disallows jest allMocks methods.
- [prefer-module-scope-constants](docs/rules/prefer-module-scope-constants.md): Prefer that screaming snake case variables always be defined using `const`, and always appear at module scope.
- [prefer-twine](docs/rules/prefer-twine.md): Prefer Twine over Bindings as the name for twine imports.
- [react-hooks-strict-return](docs/rules/react-hooks-strict-return.md): Restrict the number of returned items from React hooks.
- [react-initialize-state](docs/rules/react-initialize-state.md): Require that React component state be initialized when it has a non-empty type.
- [react-no-multiple-render-methods](docs/rules/react-no-multiple-render-methods.md): Disallow multiple render methods in React component classes.
- [react-prefer-private-members](docs/rules/react-prefer-private-members.md): Prefer all non-React-specific members be marked private in React class components.
- [react-type-state](docs/rules/react-type-state.md): Require that React component state be typed in TypeScript.
- [restrict-full-import](docs/rules/restrict-full-import.md): Prevent importing the entirety of a package.
- [sinon-no-restricted-features](docs/rules/sinon-no-restricted-features.md): Restrict the use of specified sinon features.
- [sinon-prefer-meaningful-assertions](docs/rules/sinon-prefer-meaningful-assertions.md): Require the use of meaningful sinon assertions through sinon.assert or sinon-chai.
- [strict-component-boundaries](docs/rules/strict-component-boundaries.md): Prevent module imports between components.
- [typescript/prefer-pascal-case-enums](docs/rules/typescript/prefer-pascal-case-enums.md): Prefer TypeScript enums be defined using Pascal case.
- [typescript/prefer-singular-enums](docs/rules/typescript/prefer-singular-enums.md): Prefer TypeScript enums be singular.
- [webpack/no-unnamed-dynamic-imports](docs/rules/webpack/no-unnamed-dynamic-imports.md): Require that all dynamic imports contain a `webpackChunkName` comment.

[npm-url]: https://npmjs.org/package/eslint-plugin-shopify
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-shopify.svg?style=shield
