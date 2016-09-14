module.exports = function shopifyWebPreset(context, options) {
  options = options || {};

  return {
    presets: [
      [require('babel-preset-es2015').buildPreset, options],
      require('babel-preset-es2016'),
      require('babel-preset-es2017'),
      require('./non-standard-features'),
    ],
  };
};
