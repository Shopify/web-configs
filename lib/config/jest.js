const merge = require('merge');

module.exports = {
  env: {
    'jest/globals': true,
  },

  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },

  plugins: ['jest'],

  rules: merge(require('./rules/jest')),
};
