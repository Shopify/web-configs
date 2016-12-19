# babel-preset-shopify

[![NPM version][npm-image]][npm-url]

Shopify’s org-wide set of Babel transforms.

## Usage

Install this package, as well as the parts of Babel you wish to use:

**With Yarn**

```bash
yarn add --dev --exact babel-core babel-preset-shopify
```

**With NPM**

```bash
npm install babel-core babel-preset-shopify --save-dev --save-exact
```

Then, in your Babel configuration (which should be under the `babel` key of your `package.json`), set this package as the babel preset you’d like to use:

```json
{
  "babel": {
    "presets": ["shopify/web"]
  }
}
```

## Presets

This packages comes with several different presets for you to use, depending on your project:

- `shopify`: The same as `shopify/web`.

- `shopify/web`: A preset to use for JavaScript that is meant to run in browsers. It compiles down features to only those supported by browsers that Shopify’s admin runs on. Note that many modern JavaScript features, like `Map`s, `Set`s, `for of` loops, and more, require runtime polyfills (we recommend [`core-js`](https://github.com/zloirock/core-js)).

  This preset accepts an options object. The only option available is `modules`, which should be a boolean indicating whether native ES2015 modules should be transpiled to CommonJS equivalents. Set this option to false when you are using a bundler like Rollup or Webpack 2:

  ```json
  {
    "babel": {
      "presets": {
        ["shopify/web", {"modules": false}]
      }
    }
  }
  ```

- `shopify/node`: This preset transpiles features to a specified version of Node, defaulting to `process.version`. It accepts an options object. As with `shopify/web`, you can set `{modules: false}` in order to disable transforming of ES2015 modules. You can also pass a version of Node to target during transpilation using the `version` option:

  ```json
  {
    "babel": {
      "presets": {
        ["shopify/node", {"modules": false, "version": "5.7.0"}]
      }
    }
  }
  ```

- `shopify/react`: Adds plugins that transform React (including JSX). You can use this preset with the `shopify/web` or `shopify/node` configuration. Note that if you enable this, you do not need to also enable the `shopify/flow` config (it is included automatically).

- `shopify/flow`: Adds plugins that transform Flow type annotations. You can use this preset with `shopify/web` or `shopify/node`.

As noted above, you can include multiple of these presets together. Some common recipes are shown below:

```js
// A React project without any server component, using sprockets-commoner for bundling
{
  "babel": {
    "presets": [
      "shopify/web",
      "shopify/react"
    ]
  }
}

// A Node project using flow and Rollup to create a single bundle
{
  "babel": {
    "presets": [
      ["shopify/node", {"modules": false}],
      "shopify/flow"
    ]
  }
}
```

[npm-url]: https://npmjs.org/package/babel-preset-shopify
[npm-image]: http://img.shields.io/npm/v/babel-preset-shopify.svg?style=flat-square
