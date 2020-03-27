const postcss = require('postcss');

const features = require('./features');

const plugin = postcss.plugin('@shopify/postcss-plugin', (options = {}) => {
  const processor = postcss();

  Object.keys(features).forEach((key) => {
    processor.use(features[key](options));
  });

  if (options.minimize) {
    processor.use(
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

  return processor;
});

module.exports = plugin;
