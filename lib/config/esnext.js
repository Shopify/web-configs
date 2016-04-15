var merge = require('merge');
var coreConfig = require('./core');

module.exports = {
  extends: 'plugin:shopify/core',
  parser: 'babel-eslint',

  env: {
    es6: true,
    node: true,
  },

  plugins: [
    'babel',
    'shopify',
  ],

  parserOptions: merge.recursive(
    coreConfig.parserOptions,
    {
      ecmaVersion: 7,
      sourceType: 'module',
    }
  ),

  rules: merge(
    require('./rules/ecmascript-6'),
    require('./rules/babel'),
    {'no-param-reassign': 0} // because of default params
  ),
};
