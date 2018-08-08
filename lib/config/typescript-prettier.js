module.exports = {
  extends: ['plugin:shopify/prettier'],

  rules: {
    // rules to disable to prefer prettier
    'typescript/member-delimiter-style': 'off',

    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
      },
    ],
  },
};
