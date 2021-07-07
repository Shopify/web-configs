const postcss = require('postcss');

module.exports = ({calcOptions = {}, autopprefixerOptions = {}}) => {
  return {
    ...postcss([
      require('postcss-calc')(calcOptions),
      require('postcss-flexbugs-fixes'),
      require('postcss-will-change'),
      require('autoprefixer')(autopprefixerOptions),
    ]),
    postcssPlugin: '@shopify/postcss-plugin',
  };
};
module.exports.postcss = true;
