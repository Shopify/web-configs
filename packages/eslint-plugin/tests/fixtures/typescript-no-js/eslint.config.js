const shopifyEslintPlugin = require('@shopify/eslint-plugin');

module.exports = [
  ...shopifyEslintPlugin.configs.typescript,
  ...shopifyEslintPlugin.configs.node,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
];
