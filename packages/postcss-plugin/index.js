const postcss = require('postcss');

const features = require('./features');

module.exports = (options = {}) => {
  const postCssPlugins = [];
  Object.keys(features).forEach((key) => {
    postCssPlugins.push(features[key](options));
  });
  if (options.minimize) {
    postCssPlugins.push(
      require('cssnano')({
        preset: [
          'default',
          {
            // This rule has an issue where multiple declarations
            // for the same property are merged into one, which can
            // change the semantics of code like:
            //
            // .klass {
            //   padding-left: 4rem;
            //   padding-left: calc(4rem + event(safe-area-inset-left));
            // }
            mergeLonghand: false,
          },
        ],
      }),
    );
  }
  return {
    ...postcss([...postCssPlugins]),
    postcssPlugin: '@shopify/postcss-plugin',
  };
};
module.exports.postcss = true;
