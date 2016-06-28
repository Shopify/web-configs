# babel-preset-shopify

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

### React

This preset exposes a preset specific to React that you can use with the following configuration:

```json
{
  "babel": {
    "presets": ["shopify/react"]
  }
}
```

### Node

This preset also a preset for node.js projects. The node preset automatically detects the current version of node in use and uses only the plugins needed for that version. Versions of node.js greater than or equal to 4.0 are supported (for earlier versions, use the base preset).

```json
{
  "babel": {
    "presets": ["shopify/node"]
  }
}
```

[npm-url]: https://npmjs.org/package/babel-preset-shopify
[npm-image]: http://img.shields.io/npm/v/babel-preset-shopify.svg?style=flat-square
