module.exports = {
  extends: 'plugin:shopify/core',

  env: {
    node: true,
  },

  rules: require('./rules/node'),
};
