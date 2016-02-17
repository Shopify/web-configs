var merge = require('merge');
var coreConfig = require('../core');

module.exports = {
  extends: 'plugin:shopify/core',
  parser: 'babel-eslint',

  env: {
    es6: true,
    node: true,
  },

  parserOptions: merge.recursive(
    coreConfig.parserOptions,
    {
      ecmaVersion: 6,
      sourceType: 'module',
    }
  ),

  rules: merge(
    require('../rules/ecmascript-6'),
    {'no-param-reassign': 0} // because of default params
  ),
};
