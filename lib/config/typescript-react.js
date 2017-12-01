const merge = require('merge');

module.exports = {
  extends: [
    // react should come before typescript
    'plugin:shopify/react',
    'plugin:shopify/typescript',
  ],

  rules: merge(require('./rules/typescript-react')),
};
