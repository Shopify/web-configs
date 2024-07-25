const shopifyEslintPlugin = require('@shopify/eslint-plugin');

module.exports = [
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  ...shopifyEslintPlugin.configs.core,
  ...shopifyEslintPlugin.configs.es5,
  ...shopifyEslintPlugin.configs.esnext,
  ...shopifyEslintPlugin.configs.typescript,

  // Augmenting configs - When extending, these go after the core config
  ...shopifyEslintPlugin.configs.jest,
  ...shopifyEslintPlugin.configs.node,
  ...shopifyEslintPlugin.configs.polaris,
  ...shopifyEslintPlugin.configs.react,
  ...shopifyEslintPlugin.configs.webpack,

  // Prettier config - When extending, this must go last
  ...shopifyEslintPlugin.configs.prettier,
];
