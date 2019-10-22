const merge = require('merge');

module.exports = {
  env: {
    'jest/globals': true,
  },

  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },

  plugins: ['jest', 'shopify'],

  rules: merge(require('./rules/jest'), {
    // Disallow vague words in test statements.
    // allowing "all"
    'shopify/jest/no-vague-titles': [
      'error',
      {
        allow: ['all'],
      },
    ],

    // Disallows jest snapshots.
    'shopify/jest/no-snapshots': 'error',
  }),
};
