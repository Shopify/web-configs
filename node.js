const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyNodePreset(_api, options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
    corejs = 2,
    debug = false,
  } = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns: 'usage',
        corejs,
        targets: {
          node: version,
        },
        debug,
      }],
    ],
    plugins: nonStandardPlugins(options),
  };
};
