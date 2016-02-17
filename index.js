module.exports = {
  rules: {
    'require-flow': require('./lib/rules/require-flow'),
    'binary-assignment-parens': require('./lib/rules/binary-assignment-parens'),
  },

  configs: {
    core: require('./lib/config/core'),
    es5: require('./lib/config/es5'),
    esnext: require('./lib/config/esnext'),
    react: require('./lib/config/react'),
  },
};
