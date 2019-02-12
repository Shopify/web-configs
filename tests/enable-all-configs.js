module.exports = {
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  plugins: ['self'],
  extends: [
    'plugin:self/core',
    'plugin:self/es5',
    'plugin:self/esnext',
    'plugin:self/typescript',
    'plugin:self/react',

    // Augmenting configs - When extending, these go after the core config
    'plugin:self/ava',
    'plugin:self/eslint-comments',
    'plugin:self/flow',
    'plugin:self/graphql',
    'plugin:self/jest',
    'plugin:self/jquery',
    'plugin:self/lodash',
    'plugin:self/mocha',
    'plugin:self/node',
    'plugin:self/polaris',
    'plugin:self/webpack',

    // Prettier config - When extending, this must go last
    'plugin:self/prettier',
  ],
};
