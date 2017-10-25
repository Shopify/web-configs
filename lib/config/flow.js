const merge = require('merge');

module.exports = {
  parser: 'babel-eslint',

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },

  plugins: ['flowtype', 'shopify'],

  rules: merge(require('./rules/flowtype')),
};
