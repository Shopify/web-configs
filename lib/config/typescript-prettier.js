module.exports = {
  extends: ['plugin:shopify/prettier'],

  rules: {
    // rules to disable to prefer prettier
    'typescript/member-delimiter-style': 'off',

    // we must override the parser here otherwise prettier will automatically
    // detect the parser based on file name and parse the file as graphql after
    // eslint has already preprocessed the graphql into javascript syntax.
    // see: https://github.com/prettier/eslint-plugin-prettier/issues/81
    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
      },
    ],
  },
};
