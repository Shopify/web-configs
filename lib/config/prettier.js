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
      },
    ],

    // rules to disable to prefer prettier
    'shopify/binary-assignment-parens': 'off',
    'babel/semi': 'off',
  },
};
