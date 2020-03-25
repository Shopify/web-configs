// See https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks

module.exports = {
  // Only use Hooks at the top level of a React functional component or from within another custom hook.
  'react-hooks/rules-of-hooks': 'error',
  // Checks for missing useEffect dependencies
  'react-hooks/exhaustive-deps': 'error',
};
