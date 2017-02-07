module.exports = function shopifyNonStandardPlugins(options) {
  options = options || {};
  var inlineEnv = options.inlineEnv == null ? false : options.inlineEnv;

  var plugins = [
    [require.resolve('babel-plugin-transform-object-rest-spread'), {
      useBuiltIns: true,
    }],
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: true,
      polyfill: false,
      regenerator: true,
    }],
    require.resolve('babel-plugin-transform-class-properties'),
  ];

  if (inlineEnv) {
    plugins.push(
      require.resolve('babel-plugin-transform-inline-environment-variables')
    );
  }

  return plugins;
};
