const merge = require('merge');

module.exports = {
  env: {
    node: true,
  },

  plugins: ['node'],

  rules: merge(require('./rules/node'), {
    'no-process-env': 'off',
    'no-console': 'off',
  }),
};
