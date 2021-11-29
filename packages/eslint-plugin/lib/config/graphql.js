module.exports = {
  plugins: ['graphql'],

  overrides: [
    {
      parser: '@babel/eslint-parser',
      files: ['*.graphql'],
      rules: require('./rules/graphql'),
    },
  ],
};
