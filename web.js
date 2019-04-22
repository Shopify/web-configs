const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyWebPreset(_api, options = {}) {
  const {
    modules = 'commonjs',
    corejs = 2,
    debug = false,
    browsers,
  } = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns: 'usage',
        corejs,
        targets: {
          browsers,
        },
        debug,
      }],
    ],
    plugins: nonStandardPlugins(options),
  };
};
