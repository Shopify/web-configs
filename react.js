module.exports = function shopifyReactPreset(context, options) {
  options = options || {};

  // eslint-disable-next-line no-process-env
  var env = process.env.BABEL_ENV || process.env.NODE_ENV;

  var plugins = [
    // Make JSX spread operator use Object.assign instead of the Babel helper
    [require.resolve('babel-plugin-transform-react-jsx'), {
      useBuiltIns: true,
    }],
  ];

  if (env === 'production') {
    plugins.push(
      // Hoist constant JSX elements to the top of their scope, which can
      // result in faster reconciliation
      require.resolve('babel-plugin-transform-react-constant-elements')
    );
  }

  if (env === 'development') {
    plugins.push(
      // Adds __self attribute to JSX which React will use for some warnings
      require.resolve('babel-plugin-transform-react-jsx-self'),
      // Adds component stack to warning messages
      require.resolve('babel-plugin-transform-react-jsx-source')
    );

    if (options.hot) {
      plugins.unshift(
        // Enable hot loading
        require.resolve('react-hot-loader/babel'),
        // Force `PureComponent`s to be `Component`s instead, which will make it
        // so they always re-render on hot reloads
        require.resolve('babel-plugin-transform-react-pure-to-component')
      );
    }
  }

  return {
    presets: [
      require.resolve('babel-preset-react'),
    ],
    plugins: plugins,
  };
};
