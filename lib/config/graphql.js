module.exports = {
  parser: 'babel-eslint',

  plugins: ['graphql'],

  rules: require('./rules/graphql'),
};
