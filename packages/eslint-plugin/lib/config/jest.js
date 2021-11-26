const merge = require('merge');

module.exports = {
  env: {
    'jest/globals': true,
  },

  plugins: ['jest', 'jest-formatting', '@shopify'],

  rules: merge(require('./rules/jest'), require('./rules/jest-formatting'), {
    'jest/valid-title': [
      'error',
      {
        disallowedWords: [
          'correct',
          'appropriate',
          'properly',
          'should',
          'every',
          'descriptive',
        ],
      },
    ],
    // Disallows jest snapshots.
    '@shopify/jest/no-snapshots': 'error',
  }),
};
