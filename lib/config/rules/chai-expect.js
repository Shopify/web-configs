// see https://github.com/turbo87/eslint-plugin-chai-expect

module.exports = {
  // Prevent using comparisons in the expect() argument.
  'chai-expect/no-inner-compare': 'error',
  // Prevent calling expect(...) without an assertion like .to.be.ok.
  'chai-expect/missing-assertion': 'error',
  // Prevent calling to.be.ok and other assertion properties as functions.
  'chai-expect/terminating-properties': 'error',
};
