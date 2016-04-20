var merge = require('merge');

module.exports = {
  env: {
    mocha: true,
  },

  plugins: [
    'mocha',
    'chai-expect',
    'shopify',
  ],

  rules: merge(
    require('./rules/mocha'),
    require('./rules/chai-expect'),
    {
      'shopify/sinon-prefer-meaningful-assertions': 'warn',
    }
  ),
};
