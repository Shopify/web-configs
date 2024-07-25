const shopifyEslintPlugin = require('@shopify/eslint-plugin');

module.exports = [
  {
    settings: {
      // Workaround for bug in eslint-plugin-import for new versions of Eslint
      // https://github.com/eslint/eslint/issues/17953
      'import/parsers': {
        '@babel/eslint-parser': ['.js'],
      },
    },
  },
  {
    ignores: [
      'eslint.config.js',
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
