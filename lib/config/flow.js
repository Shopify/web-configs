var merge = require('merge');

module.exports = {
  parser: 'babel-eslint',

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },

  plugins: [
    'flowtype',
    'shopify',
  ],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },

  rules: merge(
    require('./rules/flowtype'),
    {
      'shopify/require-flow': ['warn', 'explicit'],
    }
  ),
};
