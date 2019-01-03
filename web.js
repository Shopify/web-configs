const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyWebPreset(context, options = {}) {
  const {modules = 'commonjs'} = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns: 'entry',
        targets: {
          browsers: options.browsers,
        },
        debug: options.debug || false,
      }],
    ],
    plugins: nonStandardPlugins(options),
  };
};
