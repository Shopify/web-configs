const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  // ...prettierPlugin.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'error',

      // rules to disable to prefer prettier
      '@babel/semi': 'off',
      '@babel/object-curly-spacing': 'off',
      '@shopify/class-property-semi': 'off',
      '@shopify/binary-assignment-parens': 'off',
      'prefer-arrow-callback': 'off',
      'arrow-body-style': 'off',

      // Special rule for 'no-unexpected-multiline'
      // https://github.com/prettier/eslint-config-prettier/blob/5399175c37466747aae9d407021dffec2c169c8b/README.md#no-unexpected-multiline
      'no-unexpected-multiline': 'error',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/brace-style': 'off',
      '@typescript-eslint/func-call-spacing': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/type-annotation-spacing': 'off',
      '@typescript-eslint/object-curly-spacing': 'off',
    },
  },
];
