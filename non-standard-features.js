module.exports = {
  presets: [
    require('babel-preset-stage-2'),
  ],
  plugins: [
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-inline-environment-variables'),
  ],
};
