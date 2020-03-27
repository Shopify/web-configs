module.exports = {
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  extends: [
    'plugin:@shopify/core',
    'plugin:@shopify/es5',
    'plugin:@shopify/esnext',
    'plugin:@shopify/typescript',
    'plugin:@shopify/react',

    // Augmenting configs - When extending, these go after the core config
    'plugin:@shopify/graphql',
    'plugin:@shopify/jest',
    'plugin:@shopify/node',
    'plugin:@shopify/polaris',
    'plugin:@shopify/webpack',

    // Prettier config - When extending, this must go last
    'plugin:@shopify/prettier',
  ],
};
