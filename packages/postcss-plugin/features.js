module.exports = {
  calc: (options) => require('postcss-calc')(options),
  flexbugsFixes: () => require('postcss-flexbugs-fixes'),
  willChange: () => require('postcss-will-change'),
  autoprefixer: (options) => require('autoprefixer')(options),
};
