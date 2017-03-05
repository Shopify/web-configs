const postcss = require('postcss');
const features = require('./features');

const plugin = postcss.plugin('postcss-shopify', (options) => {
  const processor = postcss();

  Object.keys(features).forEach((key) => {
    processor.use(features[key](options));
  });

  return processor;
});

module.exports = plugin;
