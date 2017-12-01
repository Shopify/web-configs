const merge = require('merge');

module.exports = {
  parser: 'typescript-eslint-parser',

  extends: 'plugin:shopify/esnext',

  plugins: ['typescript'],

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },

  rules: merge(require('./rules/typescript')),
};
