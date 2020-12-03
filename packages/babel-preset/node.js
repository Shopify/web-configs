const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyNodePreset(_api, options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
    corejs = 3,
    debug = false,
    useBuiltIns = 'usage',
    typescript = false,
  } = options;

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules,
        useBuiltIns,
        corejs,
        targets: {
          node: version,
        },
        debug,
        bugfixes: true,
      },
    ],
  ];

  const plugins = [
    ...nonStandardPlugins(options),
    require.resolve('@babel/plugin-proposal-dynamic-import'),
    require.resolve('@babel/plugin-transform-modules-commonjs'),
  ];

  if (typescript) {
    presets.push(require.resolve('@babel/preset-typescript'));
  }

  return {presets, plugins};
};
