module.exports = {
  // disable prettier on fixtures so that we can use bad files in tests without
  // CI complaining about bad files.
  overrides: [{files: ['*'], rules: {'prettier/prettier': 'off'}}],
};
