module.exports = function shopifyCommonPreset(
  api,
  {
    corejs = 3,
    debug = false,
    modules = 'auto',
    useBuiltIns = 'entry',
    typescript = false,
    assumptions = {},
    typescriptOptions = {},
    transformRuntime = false,
    transformRuntimeOptions = {
      corejs: false,
      helpers: true,
      // By default, babel assumes babel/runtime version 7.0.0-beta.0,
      // explicitly resolving to match the provided helper functions.
      // https://github.com/babel/babel/issues/10261
      version: require('@babel/runtime/package.json').version,
      regenerator: true,
      // This allows users to run transform-runtime broadly across a whole project.
      // By default, transform-runtime imports from @babel/runtime/foo directly, but
      // that only works if @babel/runtime is in the node_modules of the file that is being compiled.
      absoluteRuntime: false,
    },
    react = false,
    reactOptions = {
      // Will use the native built-in instead of trying to polyfill behavior for any plugins that require one.
      useBuiltIns: true,
    },
    transformReactConstantElements = false,
    isWebpack5 = false,
  } = {},
) {
  const env = api.env();
  const isDevelopment = env === 'development' || env === 'test';
  const includeTransformReactConstantElements =
    !isDevelopment && transformReactConstantElements && react;
  const includeStripReactTestId = env !== 'test';

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules,
        useBuiltIns,
        corejs,
        debug,
        bugfixes: true,
      },
    ],
    typescript && [
      require.resolve('@babel/preset-typescript'),
      {...typescriptOptions},
    ],
    react && [
      require.resolve('@babel/preset-react'),
      {
        // This toggles behavior specific to development, such as adding __source and __self.
        development: isDevelopment,
        ...reactOptions,
      },
    ],
  ].filter(Boolean);

  const plugins = [
    // class-properties and private-methods are handled by preset-env,
    // however when enabling decorators you need to add them explicitly after
    // proposal-decorators.
    // Typescript implements the stage 1 version of decorators, which is the
    // "legacy" version. This means that the setPublicClassFields and
    // privateFieldsAsProperties assumptiions must also be enabled (which is
    // handled at the bottom of this function)
    ...(typescript
      ? [
          [
            require.resolve('@babel/plugin-proposal-decorators'),
            {legacy: true},
          ],
          require.resolve('@babel/plugin-proposal-class-properties'),
          require.resolve('@babel/plugin-proposal-private-methods'),
        ]
      : []),

    // nullish-coalescing, optional-chaining, and numeric separators are handled by preset-env
    // But they aren't yet supported in webpack 4 because of missing support
    // in acorn v6 (support is in acorn v7, which is used in webpack v5).
    // So we want to always transpile this synax away
    // See https://github.com/webpack/webpack/issues/10227
    // Can be removed once we drop support for webpack v4 (or these features
    // are backported to acorn v6)
    ...(isWebpack5 === false
      ? [
          require.resolve('@babel/plugin-proposal-numeric-separator'),
          require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
          require.resolve('@babel/plugin-proposal-optional-chaining'),
        ]
      : []),

    // when this is still webpack4 and typescript is not enabled
    // the following methods must be enabled, this is because
    // webpack 4 is still on acron 6, not required for v5 of webpack
    ...(isWebpack5 === false && typescript === false
      ? [
          require.resolve('@babel/plugin-proposal-class-properties'),
          require.resolve('@babel/plugin-proposal-private-methods'),
        ]
      : []),

    // Polyfills the runtime needed for async/await, generators, and friends
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    transformRuntime && [
      '@babel/plugin-transform-runtime',
      {
        ...transformRuntimeOptions,
        version: require('@babel/runtime/package.json').version,
      },
    ],
    // Hoist constant JSX elements to the top of their scope, which can
    // result in faster reconciliation
    includeTransformReactConstantElements &&
      require.resolve('@babel/plugin-transform-react-constant-elements'),

    // Only include testID props in the test environment
    includeStripReactTestId && require.resolve('babel-plugin-react-test-id'),
  ].filter(Boolean);

  // Compiler Assumptions
  // Full List:  https://babeljs.io/docs/en/assumptions
  const allAssumptions = {
    // nothing accesses `document.all`:
    noDocumentAll: true,
    // nothing relies on class constructors invoked without `new` throwing:
    noClassCalls: true,
    // nothing should be relying on tagged template strings being frozen:
    mutableTemplateObject: true,
    // nothing is relying on Function.prototype.length:
    ignoreFunctionLength: true,
    // nothing is relying on mutable re-exported bindings:
    constantReexports: true,
    // don't bother marking Module records non-enumerable:
    enumerableModuleMeta: true,
    // nothing uses [[Symbol.toPrimitive]]:
    // (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)
    ignoreToPrimitiveHint: true,
    // nothing relies on spread copying Symbol keys:  ({...{ [Symbol()]: 1 }})
    objectRestNoSymbols: true,
    // nothing relies on `new (() => {})` throwing:
    noNewArrows: true,
    // transpile object spread to assignment instead of defineProperty():
    setSpreadProperties: true,
    // nothing should be using custom iterator protocol:
    skipForOfIteratorClosing: true,
    // nothing inherits from a constructor function with explicit return value:
    superIsCallableConstructor: true,
    // noIncompleteNsImportDetection: true,
  };

  // When decorators are used in legacy mode proposal-class-properties, plugin-proposal-private-methods must be used in loose mode (this is now handled by these assumptions)
  // see https://babeljs.io/docs/en/babel-plugin-proposal-decorators#note-compatibility-with-babel-plugin-proposal-class-properties
  // see https://babeljs.io/docs/en/babel-plugin-proposal-class-properties#loose
  // see https://babeljs.io/docs/en/babel-plugin-proposal-private-methods#loose
  // see https://babeljs.io/docs/en/assumptions
  if (typescript) {
    allAssumptions.setPublicClassFields = true;
    allAssumptions.privateFieldsAsProperties = true;
  }

  Object.assign(allAssumptions, assumptions);

  return {presets, plugins, assumptions: allAssumptions};
};
