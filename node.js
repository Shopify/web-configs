var nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyNodePreset(context, options) {
  options = options || {};
  var version = options.version || 'current';
  var modules = options.modules == null ? true : options.modules;

  return {
    presets: [
      [require.resolve('babel-preset-env'), {
        modules: modules,
        useBuiltIns: true,
        targets: {
          node: version,
        },
      }],
      require.resolve('babel-preset-stage-3'),
    ],
    plugins: nonStandardPlugins(options),
  };
};
