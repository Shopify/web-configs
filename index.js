const postcss = require('postcss');
const features = require('./features');

const plugin = postcss.plugin('postcss-shopify', (options = {}) => {
  const processor = postcss();

  Object.keys(features).forEach((key) => {
    processor.use(features[key](options));
  });

  if (options.minimize) {
    processor.use(require('cssnano')({
      preset: 'default',
    }));
  }

  return processor;
});

module.exports = plugin;
