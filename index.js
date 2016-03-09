module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-react'),
    require('babel-preset-stage-2'),
  ],
  plugins: [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-inline-environment-variables'),
  ],
};
