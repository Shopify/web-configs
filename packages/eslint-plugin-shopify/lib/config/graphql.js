module.exports = {
  plugins: ['graphql'],

  overrides: [
    {
      parser: 'babel-eslint',
      files: ['*.graphql'],
      rules: require('./rules/graphql'),
    },
  ],
};
