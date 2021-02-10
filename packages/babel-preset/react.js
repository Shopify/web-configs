module.exports = function shopifyReactPreset(api, options = {}) {
  const env = api.env();

  const {
    pragma = 'React.createElement',
    pragmaFrag = 'React.Fragment',
    transformReactConstantElements = true,
  } = options;

  const plugins = [];

  if (env === 'production' && transformReactConstantElements) {
    plugins.push(
      // Hoist constant JSX elements to the top of their scope, which can
      // result in faster reconciliation
      require.resolve('@babel/plugin-transform-react-constant-elements'),
    );
  }

  const isDevelopment = env === 'development' || env === 'test';

  if (env !== 'test') {
    plugins.push(require.resolve('babel-plugin-react-test-id'));
  }

  return {
    presets: [
      [
        require.resolve('@babel/preset-react'),
        {
          useBuiltIns: true,
          pragma,
          pragmaFrag,
          development: isDevelopment,
        },
      ],
    ],
    plugins,
  };
};
