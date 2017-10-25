module.exports = {
  extends: ['plugin:shopify/esnext', 'prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: false,
        jsxBracketSameLine: false,
      },
    ],

    // rules to disable to prefer prettier
    'shopify/binary-assignment-parens': 'off',
  },
};
