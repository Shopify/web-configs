# `@shopify/babel-preset`

[![Build Status](https://travis-ci.com/Shopify/web-foundation.svg?branch=master)](https://travis-ci.com/Shopify/web-foundation)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fbabel-preset.svg)](https://badge.fury.io/js/%40shopify%2Fbabel-preset.svg)

Shopify’s org-wide set of Babel transforms.

## Usage

Install this package, as well as the parts of Babel you wish to use:

**With Yarn**

```bash
yarn add --dev --exact babel-core @shopify/babel-preset
```

**With npm**

```bash
npm install babel-core @shopify/babel-preset --save-dev --save-exact
```

Then, in your Babel configuration (which should be under the `babel` key of your `package.json`), set this package as the babel preset you’d like to use:

```json
{
  "babel": {
    "presets": ["@shopify/babel-preset/web"]
  }
}
```

## Presets

This packages comes with several different presets for you to use, depending on your project:

- `@shopify/babel-preset`: The same as `@shopify/babel-preset/web`.

- `@shopify/babel-preset/web`: A preset to use for JavaScript that is meant to run in browsers. It compiles down features to only those supported by browsers that you have specified in your [browserslist config](https://github.com/browserslist/browserslist). Note that many modern JavaScript features, like `Map`s, `Set`s, `for of` loops, and more, require runtime polyfills (we recommend [`@shopify/polyfills`](https://github.com/Shopify/quilt/tree/master/packages/polyfills), as our `web` and `node` configs will reduce these imports to the set of features needed to polyfill your target environment).

  This preset accepts an options object. The following options are allowed:

    - `modules`, a boolean indicating whether native ES2015 modules should be transpiled to CommonJS equivalents. Set this option to `false` when you are using a bundler like Rollup or Webpack 2:

      ```json
      {
        "babel": {
          "presets": [
            ["@shopify/babel-preset/web", {"modules": false}]
          ]
        }
      }
      ```

    - `browsers`, a [browserslist](https://github.com/ai/browserslist) string or array, which specifies which browsers to transpile for. We recommend setting your target browsers using a `browserslist` key in `package.json`, as that method will automatically be used by all browserslist-compatible tools.

      ```json
      {
        "babel": {
          "presets": [
            ["@shopify/babel-preset/web", {
              "browsers": ["last 3 versions"]
            }]
          ]
        }
      }
      ```

    - `typescript`, a boolean (defaults to `false`) to turn on [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) and  other plugins that allow babel to read typescript files directly.

    - `inlineEnv`, a boolean (defaults to `false`) to automatically replace `process.env.<VAR>` statements with the corresponding environment variable.

    - `debug`, a boolean (defaults to `false`) to turn on [`@babel/preset-env` debugging](https://github.com/babel/babel/tree/master/packages/babel-preset-env#debug).

    - `corejs`, a number of string that will be used to set the [`corejs` version to use](https://babeljs.io/blog/2019/03/19/7.4.0#core-js-3-7646-https-githubcom-babel-babel-pull-7646)

    - `useBuiltIns`, a string that is passed to the [`useBuiltIns` option of `@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)

- `@shopify/babel-preset/node`: This preset transpiles features to a specified version of Node, defaulting to the currently active version. It accepts an options object. The `modules`, `typescript`, `inlineEnv`,`debug`, `corejs` and `useBuiltIns` options do the same thing they do in `@shopify/babel-preset/web`, detailed above. You can also pass a version of Node to target during transpilation using the `version` option:

  ```json
  {
    "babel": {
      "presets": [
        ["@shopify/babel-preset/node", {
          "modules": false,
          "version": 4
        }]
      ]
    }
  }
  ```

- `@shopify/babel-preset/react`: Adds plugins that transform React (including JSX). You can use this preset with the `@shopify/babel-preset/web` or `@shopify/babel-preset/node` configuration.

  This preset accepts an options object.
  - `pragma` : Replace the function used when compiling JSX expressions. Defaults to `React.createElement`.
  - `pragmaFrag`: Replace the function used when compiling JSX fragment expressions. Defaults to `React.Fragment`.

  ```json
  {
    "babel": {
      "presets": [
        ["@shopify/babel-preset/react", {"pragma": "h"}]
      ]
    }
  }
  ```

As noted above, you can include multiple of these presets together. Some common recipes are shown below:

```js
// A React project without any server component, using sprockets-commoner for bundling
{
  "babel": {
    "presets": [
      "@shopify/babel-preset/web",
      "@shopify/babel-preset/react"
    ]
  }
}

// A Node project using Rollup to create a single bundle
{
  "babel": {
    "presets": [
      ["@shopify/babel-preset/node", {"modules": false}]
    ]
  }
}
```
