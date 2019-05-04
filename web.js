const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyWebPreset(_api, options = {}) {
  const {
    modules = 'commonjs',
    corejs = 2,
    debug = false,
    browsers,
    useBuiltIns = 'usage',
  } = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns,
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
