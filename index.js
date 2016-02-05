module.exports = {
  rules: {
    'require-flow': require('./lib/rules/require-flow'),
    'binary-assignment-parens': require('./lib/rules/binary-assignment-parens'),
  },

  rulesConfig: {
    'require-flow': 0,
    'binary-assignment-parens': 0,
  },
};
