const postcss = require('postcss');

module.exports = ({
  calcOptions = {},
  autoprefixerOptions = {},
  pxtoremOptions = {},
} = {}) => {
  return {
    ...postcss([
      require('postcss-calc')(calcOptions),
      require('postcss-flexbugs-fixes'),
      require('postcss-will-change'),
      require('autoprefixer')(autoprefixerOptions),
      require('postcss-pxtorem')({
        rootValue: 16,
        replace: true,
        propList: ['*'],
        ...pxtoremOptions,
      }),
    ]),
    postcssPlugin: '@shopify/postcss-plugin',
  };
};
module.exports.postcss = true;
