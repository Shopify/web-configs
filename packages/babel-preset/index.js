module.exports = function shopifyCommonPreset(
  api,
  {
    corejs = 3,
    debug = false,
    modules = 'auto',
    useBuiltIns = 'entry',
    typescript = false,
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
    // proposal-decorators must go before proposal-class-properties.
    // Typescript implements the stage 1 version of decorators, which is the
    // "legacy" version. When decorators are used in legacy mode,
    // proposal-class-properties must be used in loose mode
    // see https://babeljs.io/docs/en/babel-plugin-proposal-decorators#note-compatibility-with-babel-plugin-proposal-class-properties
    typescript && [
      require.resolve('@babel/plugin-proposal-decorators'),
      {legacy: true},
    ],
    // Enable loose mode to use assignment instead of defineProperty when typescript is enabled
    // class-properties are handled by preset-env
    // But when using typescript we need to transpile them in loose mode to support proposal-decorators's legacy mode
    typescript && require.resolve('@babel/plugin-proposal-class-properties'),

    // The "loose" option must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods
    typescript && require.resolve('@babel/plugin-proposal-private-methods'),
    // nullish-coalescing, optional-chaining, and numeric separators are handled by preset-env
    // But they aren't yet supported in webpack 4 because of missing support
    // in acorn v6 (support is in acorn v7, which is used in webpack v5).
    // So we want to always transpile this synax away
    // See https://github.com/webpack/webpack/issues/10227
    // Can be removed once we drop support for webpack v4 (or these features
    // are backported to acorn v6)
    !isWebpack5 &&
      typescript &&
      require.resolve('@babel/plugin-proposal-numeric-separator'),
    !isWebpack5 &&
      typescript &&
      require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),

    !isWebpack5 &&
      typescript &&
      require.resolve('@babel/plugin-proposal-optional-chaining'),
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
  ].filter(Boolean);

  const assumptions = {
    setPublicClassFields: true,
    privateFieldsAsProperties: true,
  };

  return {presets, plugins, assumptions};
};
