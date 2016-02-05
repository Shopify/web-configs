# eslint-plugin-shopify

[![Build status][circle-image]][circle-url] [![NPM version][npm-image]][npm-url]

Shopify-specific ESLint rules.

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

Add `shopify` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "shopify"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "shopify/require-flow": 2
  }
}
```

## Supported Rules

- [require-flow](docs/rules/require-flow.md): Requires (or disallows) @flow declarations be present at the top of each file.
- [binary-assignment-parens](docs/rules/binary-assignment-parens.md): Requires (or disallows) assignments of binary, boolean-producing expressions to be wrapped in parentheses.

## Contributing

The easiest way to add new rules is to use the [ESLint Yeoman generator](https://www.npmjs.com/package/generator-eslint). Running `yo eslint:rule` from the root of this project should add the required main file, docs, and test for your new rules. Make sure that these are all filled out and consistent with the other rules before merging. All tests (including linting) can be run using `npm test`.

[npm-url]: https://npmjs.org/package/eslint-plugin-shopify
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-shopify.svg?style=flat-square
[circle-url]: https://circleci.com/gh/Shopify/eslint-plugin-shopify
[circle-image]: https://circleci.com/gh/Shopify/eslint-plugin-shopify.svg?&style=shield&circle-token=12c1aa1992fe3b92a6bcabfe1a6416ae7a69e35b
