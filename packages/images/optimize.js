const {extendDefaultPlugins} = require('svgo');

function svgOptions() {
  return {
    plugins: extendDefaultPlugins([{name: 'removeTitle'}]).filter(
      (plugin) => plugin.name !== 'removeViewBox',
    ),
  };
}

module.exports = {
  svgOptions,
};
