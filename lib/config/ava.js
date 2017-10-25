module.exports = {
  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },

  plugins: ['ava'],

  rules: require('./rules/ava'),
};
