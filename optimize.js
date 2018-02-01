function svgOptions() {
  return {
    plugins: [
      {removeTitle: true},
      {removeDimensions: true},
      {removeViewBox: false},
    ],
  };
}

module.exports = {
  svgOptions,
};
