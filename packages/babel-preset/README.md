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

```javascript
{
  "babel": {
    "presets": [
      ["@shopify/babel-preset/common", {"typescript": true}]
    ]
  }
}
```

### Options

#### `debug`

`boolean`, defaults to `false`.

Outputs to console.log the polyfills and transform plugins enabled by preset-env and, if applicable, which one of your targets that needed it.

[Documentation](https://babeljs.io/docs/en/babel-preset-env#debug)


#### `modules`

`"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false`, defaults to `"auto"`.

Enable transformation of ES module syntax to another module type. Note that `cjs` is just an alias for `commonjs`.

Setting this to `false` will preserve ES modules. Use this only if you intend to ship native ES Modules to browsers. If you are using a bundler with Babel, the default `modules: "auto"` is always preferred.

##### `modules: "auto"`

By default `@babel/preset-env` uses [`caller`](options.md#caller) data to determine whether ES modules and module features (e.g. `import()`) should be transformed. Generally `caller` data will be specified in the bundler plugins (e.g. `babel-loader`, `@rollup/plugin-babel`) and thus it is not recommended to pass `caller` data yourself -- The passed `caller` may overwrite the one from bundler plugins and in the future you may get suboptimal results if bundlers supports new module features.

[Documentation](https://babeljs.io/docs/en/babel-preset-env#modules)

#### `typescript`
Enables `@babel/preset-typescript` to transfrom TypeScript into Javascript.

[Documentation](https://babeljs.io/docs/en/babel-preset-typescript)

#### `useBuiltIns`

`"usage"` | `"entry"` | `false`, defaults to `false`.

This option configures how `@babel/preset-env` handles polyfills.

When either the `usage` or `entry` options are used, `@babel/preset-env` will add direct references to `core-js` modules as bare imports (or requires). This means `core-js` will be resolved relative to the file itself and needs to be accessible.

[Documentation](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)

#### `transformRuntime`

`boolean`, defaults to `false`

This option when `true` will enable the `@babel/plugin-transform-runtime` plugin.

[Documentation](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

#### `transformRuntimeOptions`

This option configures the `@babel/plugin-transform-runtime` plugin when the `transformRuntime` option has been enabled.

##### `transformRuntimeOptions.corejs`
`false`, `2`, `3` or `{ version: 2 | 3, proposals: boolean }`, defaults to `false`.

##### `transformRuntimeOptions.helpers`
`boolean`, defaults to `true`

Toggles whether or not inlined Babel helpers (classCallCheck, extends, etc.) are replaced with calls to moduleName.

For more information, see [Helper aliasing](https://babeljs.io/docs/en/babel-plugin-transform-runtime#helper-aliasing).

##### `transformRuntimeOptions.regenerator`
`boolean`, defaults to `true`

Toggles whether or not generator functions are transformed to use a regenerator runtime that does not pollute the global scope.

For more information, see [Regenerator aliasing](https://babeljs.io/docs/en/babel-plugin-transform-runtime#regenerator-aliasing).

##### `transformRuntimeOptions.absoluteRuntime`
`boolean` | `string`, defaults to `false`

This allows users to run transform-runtime broadly across a whole project.
By default, transform-runtime imports from @babel/runtime/foo directly, but that only works if @babel/runtime is in the node_modules of the file that is being compiled.


#### `includeReactPreset`
`boolean`, defaults to `false`.

This option when `true` will enable the `@babel/preset-react` preset.

[Documentation](https://babeljs.io/docs/en/babel-preset-react)

##### `reactPresetOptions.useBuiltIns`
`boolean`, defaults to `true`

Will use the native built-in instead of trying to polyfill behavior for any plugins that require one.

##### `reactPresetOptions.pragma`
`string`, defaults to `React.createElement`

Replace the function used when compiling JSX expressions.

##### `reactPresetOptions.pragmaFrag`
`string`, defaults to `React.Fragment`

Replace the component used when compiling JSX fragments.

##### `reactPresetOptions.useSpread`
`boolean`, defaults to `true`

When spreading props, use inline object with spread elements directly instead of Babel's extend helper or Object.assign.

#### `transformReactConstantElements`
`boolean`, defaults to `false`.

This option when `true` will enable the `@babel/plugin-transform-react-constant-elements` preset.

[Documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements)
    