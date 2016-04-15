# eslint-plugin-shopify

[![NPM version][npm-image]][npm-url]

Shopify’s ESLint rules and configs.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-shopify`:

```
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

If using React, extend the React version of the configuration (which adds some React-specific rules to those in the ESNext config):

```json
{
  "extends": "plugin:shopify/react"
}
```

If working on an ES5 project, extend the ES5 version of the configuration:

```json
{
  "extends": "plugin:shopify/es5"
}
```

You can also add some "augmenting" configs on top of the "core" config by extending an array of linting configs. For example, this package provides a lodash linting config, which can be added to the ESNext config with the following configuration file:

```json
{
  "extends": [
    "plugin:shopify/esnext",
    "plugin:shopify/lodash"
  ]
}
```

This plugin provides the following core configurations:

- [esnext](lib/config/esnext.js): Use this for anything written with ES2015+ features.
- [react](lib/config/react.js): Use this for React projects.
- [es5](lib/config/es5.js): Use this for legacy projects.

This plugin also provides the following tool-specific configurations, which can be used on top of the core configurations:

- [lodash](lib/config/lodash.js): Use this for projects that use lodash.

## Plugin-Provided Rules

This plugin provides the following custom rules, which are included as appropriate in all core linting configs:

- [require-flow](docs/rules/require-flow.md): Requires (or disallows) @flow declarations be present at the top of each file.
- [binary-assignment-parens](docs/rules/binary-assignment-parens.md): Requires (or disallows) assignments of binary, boolean-producing expressions to be wrapped in parentheses.

## Creating New Rules

The easiest way to add new rules is to use the [ESLint Yeoman generator](https://www.npmjs.com/package/generator-eslint). Running `yo eslint:rule` from the root of this project should add the required main file, docs, and test for your new rules. Make sure that these are all filled out and consistent with the other rules before merging. All tests (including linting) can be run using `npm test`.

[npm-url]: https://npmjs.org/package/eslint-plugin-shopify
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-shopify.svg?style=flat-square
