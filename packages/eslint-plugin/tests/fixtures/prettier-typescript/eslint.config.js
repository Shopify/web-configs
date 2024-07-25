const shopifyEslintPlugin = require('@shopify/eslint-plugin');

module.exports = [
  ...shopifyEslintPlugin.configs.typescript,
  ...shopifyEslintPlugin.configs.prettier,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
];
