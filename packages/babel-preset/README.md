# `@shopify/babel-preset`

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

    - `transformRuntime`, a boolean (defaults to `false` and requires `typescript` to be `true`) to add the [`@babel/plugin-transform-runtime` plugin](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime).

    - `transformRuntimeOptions`, allows the [`@babel/plugin-transform-runtime` plugin](https://babeljs.io/docs/en/babel-plugin-transform-runtime#options) to be configured.

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
  - `transformReactConstantElements`: Adds the `@babel/plugin-transform-react-constant-elements` plugin for production environments. Defaults to `true`.

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

## Experimental Presets

## `@shopify/babel-preset/common`

The `@shopify/babel-preset/common` preset is designed to be a common import that offers more options. It is a combination of the `web`, `node`, and `react` presets all in one.

### Usage

```json
{
  "babel": {
    "presets": [
      ["@shopify/babel-preset/common", {"typescript": true}]
    ]
  }
}
```

#### Targets

This preset uses the top-level `targets` to determine what runtime is being built.

```json
{
  "targets": "current node",
  "presets": ["@shopify/babel-preset/common"],
  "plugins": ["polyfill-es-shims"]
}
```

See more details [here](https://babel.dev/blog/2021/02/22/7.13.0#top-level-targets-option-12189httpsgithubcombabelbabelpull12189-rfchttpsgithubcombabelrfcspull2).

### Options

#### `corejs`, `debug`, `modules`, `useBuiltIns`

These options come from the `@babel/preset-env` preset and match the default values.

Read the [options](https://babeljs.io/docs/en/babel-preset-env#options) for more information on the possible values.

#### `typescript`

Enables `@babel/preset-typescript` to transfrom TypeScript into Javascript.

#### `typescriptOptions`

See all avaialble [options](https://babeljs.io/docs/en/babel-preset-typescript).

#### `transformRuntime`

`boolean`, defaults to `false`

This option when `true` will enable the `@babel/plugin-transform-runtime` plugin.

#### `transformRuntimeOptions`

This option configures the `@babel/plugin-transform-runtime` plugin when the `transformRuntime` option has been enabled.

See available [options](https://babeljs.io/docs/en/babel-plugin-transform-runtime).

#### `react`

`boolean`, defaults to `false`.

This option when `true` will enable the `@babel/preset-react` preset.

#### `reactOptions`

The following options are different from the defaults. See all available [options here](https://babeljs.io/docs/en/babel-preset-react).

##### `reactOptions.useBuiltIns`

`boolean`, defaults to `true`

Will use the native built-in instead of trying to polyfill behavior for any plugins that require one.

##### `reactOptions.useSpread`

`boolean`, defaults to `true`

When spreading props, use inline object with spread elements directly instead of Babel's extend helper or Object.assign.

#### `transformReactConstantElements`

`boolean`, defaults to `false`.

This option when `true` will enable the `@babel/plugin-transform-react-constant-elements` preset.

[Documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements)
    
