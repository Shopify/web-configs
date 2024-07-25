module.exports = {
  // Imported separately to allow configs to reference it and avoid circular reference
  ...require('./plugin'),

  configs: {
    // Core configs - When extending, one of these should go first
    core: require('./lib/config/core'),
    es5: require('./lib/config/es5'),
    esnext: require('./lib/config/esnext'),
    typescript: require('./lib/config/typescript'),

    // Augmenting configs - When extending, these go after the core config
    jest: require('./lib/config/jest'),
    node: require('./lib/config/node'),
    polaris: require('./lib/config/polaris'),
    react: require('./lib/config/react'),
    'typescript-type-checking': require('./lib/config/typescript-type-checking'),
    webpack: require('./lib/config/webpack'),

    // Prettier config - When extending, this must go last
    prettier: require('./lib/config/prettier'),
  },
};
