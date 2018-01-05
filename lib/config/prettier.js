module.exports = {
  extends: ['prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        arrowParens: 'always',
      },
    ],

    // rules to disable to prefer prettier
    'shopify/binary-assignment-parens': 'off',
    'babel/semi': 'off',

    // Special rule for 'lines-around-comment'
    // https://github.com/prettier/eslint-config-prettier/blob/984de70e8c6b57684b444283561019389ccebd11/README.md#lines-around-comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
      },
    ],

    // Special rule for 'no-unexpected-multiline'
    // https://github.com/prettier/eslint-config-prettier/blob/5399175c37466747aae9d407021dffec2c169c8b/README.md#no-unexpected-multiline
    'no-unexpected-multiline': 'error',
  },
};
