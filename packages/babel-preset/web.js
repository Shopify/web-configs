const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyWebPreset(_api, options = {}) {
  const {
    modules = 'commonjs',
    corejs = 2,
    debug = false,
    browsers,
    useBuiltIns = 'entry',
    typescript = false,
  } = options;

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules,
        useBuiltIns,
        corejs,
        targets: browsers,
        debug,
        bugfixes: true,
      },
    ],
  ];

  if (typescript) {
    presets.push(require.resolve('@babel/preset-typescript'));
  }

  // When decorators are used in legacy mode proposal-class-properties, plugin-proposal-private-methods must be used in loose mode (this is now handled by these assumptions)
  // see https://babeljs.io/docs/en/babel-plugin-proposal-decorators#note-compatibility-with-babel-plugin-proposal-class-properties
  // see https://babeljs.io/docs/en/babel-plugin-proposal-class-properties#loose
  // see https://babeljs.io/docs/en/babel-plugin-proposal-private-methods#loose
  // see https://babeljs.io/docs/en/assumptions
  const assumptions = typescript
    ? {
        setPublicClassFields: true,
        privateFieldsAsProperties: true,
      }
    : {};

  return {
    presets,
    plugins: nonStandardPlugins(options),
    assumptions,
  };
};
