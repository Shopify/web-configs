function svgOptions() {
  return {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  };
}

module.exports = {
  svgOptions,
};
