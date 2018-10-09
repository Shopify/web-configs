const merge = require('merge');

module.exports = {
  plugins: ['eslint-comments'],

  rules: merge(require('./rules/eslint-comments')),
};
