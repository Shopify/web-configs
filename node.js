const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyNodePreset(_api, options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
  } = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns: 'usage',
        targets: {
          node: version,
        },
        debug: options.debug || false,
      }],
    ],
    plugins: nonStandardPlugins(options),
  };
};
