function svgOptions() {
  return {
    plugins: [
      {removeTitle: true},
      {removeDimensions: true},
    ],
  };
}

module.exports = {
  svgOptions,
};
