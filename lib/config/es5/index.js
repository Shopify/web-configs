var merge = require('merge');

module.exports = {
  extends: 'plugin:shopify/core',

  env: {
    node: true,
  },

  rules: merge(
    require('../rules/node'),
    {'shopify/require-flow': 0}
  ),
};
