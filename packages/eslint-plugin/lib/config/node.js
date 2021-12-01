module.exports = {
  env: {
    node: true,
  },

  plugins: ['node'],

  rules: {
    ...require('./rules/node'),
    'no-process-env': 'off',
    'no-console': 'off',
  },
};
