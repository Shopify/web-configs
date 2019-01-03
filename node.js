const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyNodePreset(context, options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
  } = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns: 'entry',
        targets: {
          node: version,
        },
        debug: options.debug || false,
      }],
    ],
    plugins: nonStandardPlugins(options),
  };
};
