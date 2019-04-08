const merge = require('merge');

module.exports = {
  extends: 'plugin:shopify/esnext',

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {jsx: true},
  },

  plugins: ['react', 'jsx-a11y', 'react-hooks', 'shopify'],

  rules: merge(
    require('./rules/react'),
    require('./rules/react-hooks'),
    require('./rules/jsx-a11y'),
    {
      'shopify/react-initialize-state': 'error',
      'shopify/react-no-multiple-render-methods': 'error',
      'shopify/react-prefer-private-members': 'error',
      'shopify/react-type-state': 'error',
      'shopify/jsx-no-complex-expressions': 'error',
      'shopify/jsx-no-hardcoded-content': 'error',
      'shopify/jsx-prefer-fragment-wrappers': 'error',
    },
  ),

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/react-typescript'),
    },
  ],
};
