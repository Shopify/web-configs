const shopifyPlugin = require('../..');

module.exports = [
  {
    plugins: {
      '@shopify': shopifyPlugin,
    },
    rules: {
      '@shopify/polaris-prefer-sectioned-prop': 'error',
      '@shopify/polaris-no-bare-stack-item': 'error',
    },
  },
];
