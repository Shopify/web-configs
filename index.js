module.exports = {
  rules: {
    'binary-assignment-parens': require('./lib/rules/binary-assignment-parens'),
    'class-property-semi': require('./lib/rules/class-property-semi'),
    'jquery-dollar-sign-reference': require('./lib/rules/jquery-dollar-sign-reference'),
    'no-useless-computed-properties': require('./lib/rules/no-useless-computed-properties'),
    'prefer-class-properties': require('./lib/rules/prefer-class-properties'),
    'prefer-early-return': require('./lib/rules/prefer-early-return'),
    'require-flow': require('./lib/rules/require-flow'),
    'restrict-full-import': require('./lib/rules/restrict-full-import'),
    'sinon-no-restricted-features': require('./lib/rules/sinon-no-restricted-features'),
    'sinon-prefer-meaningful-assertions': require('./lib/rules/sinon-prefer-meaningful-assertions'),
  },

  configs: {
    core: require('./lib/config/core'),
    es5: require('./lib/config/es5'),
    esnext: require('./lib/config/esnext'),
    react: require('./lib/config/react'),
    lodash: require('./lib/config/lodash'),
  },
};
