var semver = require('semver');

module.exports = function shopifyNodePreset(context, options) {
  options = options || {};
  var version = options.version || process.version;
  var modules = options.modules == null ? true : options.modules;
  var pluginsList = [];

  if (modules) {
    pluginsList.push(
      require('babel-plugin-transform-es2015-modules-commonjs')
    );
  }

  if (semver.lt(version, '6.0.0')) {
    pluginsList.push(
      require('babel-plugin-transform-es2015-destructuring'),
      require('babel-plugin-transform-es2015-function-name'),
      require('babel-plugin-transform-es2015-parameters'),
      require('babel-plugin-transform-es2015-shorthand-properties'),
      require('babel-plugin-transform-es2015-sticky-regex'),
      require('babel-plugin-transform-es2015-unicode-regex')
    );
  }

  if (semver.lt(version, '5.0.0')) {
    pluginsList.push(
      require('babel-plugin-transform-es2015-spread')
    );
  }

  return {
    presets: [
      {plugins: pluginsList},
      require('babel-preset-es2016'),
      require('babel-preset-es2017'),
      require('./non-standard-features'),
    ],
  };
};
