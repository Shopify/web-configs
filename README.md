# eslint-plugin-shopify

[![NPM version][npm-image]][npm-url]

Shopify’s org-wide set of Babel transforms.

## Usage

Install this package, as well as the parts of Babel you wish to use:

```bash
npm install babel-core babel-preset-shopify --save-dev --save-exact
```

Then, in your Babel configuration (which should be under the `babel` key of your `package.json`, set this package as the babel preset you’d like to use):

```json
{
  "babel": {
    "presets": ["shopify"]
  }
}
```

[npm-url]: https://npmjs.org/package/babel-plugin-shopify
[npm-image]: http://img.shields.io/npm/v/babel-plugin-shopify.svg?style=flat-square
