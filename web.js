var browsers = require('./browsers');
var nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyWebPreset(context, options) {
  options = options || {};
  var modules = options.modules == null ? 'commonjs' : options.modules;

  return {
    presets: [
      [require.resolve('babel-preset-env'), {
        modules: modules,
        useBuiltIns: true,
        targets: {
          browsers: options.browsers || browsers,
        },
      }],
      require.resolve('babel-preset-stage-3'),
    ],
    plugins: nonStandardPlugins(options),
  };
};
