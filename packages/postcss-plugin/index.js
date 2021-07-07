const postcss = require('postcss');

module.exports = (options = {}) => {
  return {
    ...postcss([
      require('postcss-calc')(options),
      require('postcss-flexbugs-fixes'),
      require('postcss-will-change'),
      require('autoprefixer')(options),
    ]),
    postcssPlugin: '@shopify/postcss-plugin',
  };
};
module.exports.postcss = true;
