var merge = require('merge');
var es6Config = require('../esnext');

module.exports = {
  extends: 'plugin:shopify/esnext',

  plugins: [
    'react',
    'shopify',
  ],

  parserOptions: merge.recursive(
    es6Config.parserOptions,
    {
      ecmaFeatures: {jsx: true},
    }
  ),

  globals: {
    fetch: true,
    ReactElement: true,
    ReactClass: true,
  },

  rules: require('../rules/react'),
};
