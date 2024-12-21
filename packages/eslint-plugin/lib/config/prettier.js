const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'error',

      // rules to disable to prefer prettier
      '@shopify/class-property-semi': 'off',
      '@shopify/binary-assignment-parens': 'off',
      'prefer-arrow-callback': 'off',
      'arrow-body-style': 'off',

      // Special rule for 'no-unexpected-multiline'
      // https://github.com/prettier/eslint-config-prettier/blob/5399175c37466747aae9d407021dffec2c169c8b/README.md#no-unexpected-multiline
      'no-unexpected-multiline': 'error',
    },
  },
];
