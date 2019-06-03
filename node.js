const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyNodePreset(_api, options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
    corejs = 2,
    debug = false,
    useBuiltIns = 'entry',
    typescript = false,
  } = options;

  const presets = [
    [require.resolve('@babel/preset-env'), {
      modules,
      useBuiltIns,
      corejs,
      targets: {
        node: version,
      },
      debug,
    }],
  ];

  const plugins = [
    ...nonStandardPlugins(options),
  ];

  if (typescript) {
    presets.push(
      require.resolve('@babel/preset-typescript'),
    );
  }

  return {presets, plugins};
};
