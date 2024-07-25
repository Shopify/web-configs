const shopifyEslintPlugin = require('@shopify/eslint-plugin');

module.exports = [
  {
    ignores: [
      'node_modules',
      '/coverage',

      // The eslint plugin test fixtures contain files that deliberatly fail linting
      // in order to test that the plugin reports those errors. We don't want the
      // normal eslint run to complain about those files though so ignore them here.
      'packages/eslint-plugin/tests/fixtures',
    ],
  },
  ...shopifyEslintPlugin.configs.typescript,
  ...shopifyEslintPlugin.configs.react,
  ...shopifyEslintPlugin.configs.prettier,
  ...shopifyEslintPlugin.configs.node,
  ...shopifyEslintPlugin.configs.jest,
];
