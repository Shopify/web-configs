const merge = require('merge');

module.exports = {
  env: {
    mocha: true,
  },

  plugins: ['mocha', 'chai-expect', 'shopify'],

  rules: merge(require('./rules/mocha'), require('./rules/chai-expect'), {
    'shopify/sinon-prefer-meaningful-assertions': 'error',
    // Chai expect syntax produces unused expression warnings
    'no-unused-expressions': 'off',
    // Chai expect syntax can have long chained calls
    'newline-per-chained-call': 'off',
  }),
};
