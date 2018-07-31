module.exports = {
  extends: ['plugin:shopify/prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
      },
    ],
  },
};
