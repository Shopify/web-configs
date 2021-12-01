module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order', './rules'],
  // Emit errors for `stylelint-disable` comments that don't actually match any lints that need to be disabled.
  reportNeedlessDisables: true,
  // Emit errors for `stylelint-disable` comments that don't match rules that are specified in the configuration object.
  reportInvalidScopeDisables: true,
  rules: {
    ...require('./config/core'),
    ...require('./config/order'),
    ...require('./config/shopify'),
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: require('postcss-scss'),
      rules: {
        ...require('./config/scss'),
      },
    },
  ],
};
