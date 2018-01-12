const merge = require('merge');

module.exports = {
  plugins: ['shopify'],

  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 5,
    },
  },

  rules: merge(
    require('./rules/best-practices'),
    require('./rules/legacy'),
    require('./rules/possible-errors'),
    require('./rules/shopify'),
    require('./rules/strict-mode'),
    require('./rules/stylistic-issues'),
    require('./rules/variables'),
  ),
};
