module.exports = {
  // General

  // Prevent missing displayName in a React component definition
  'react/display-name': ['warn', {ignoreTranspilerName: false}],
  // Forbid certain propTypes
  'react/forbid-prop-types': ['error', {forbid: ['any', 'array']}],
  // Prevent comments from being inserted as text nodes
  'react/no-comment-textnodes': 'error',
  // Prevent usage of dangerous JSX properties
  'react/no-danger': 'warn',
  // Prevent usage of deprecated methods
  'react/no-deprecated': 'error',
  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 'error',
  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 'error',
  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 'error',
  // Prevent usage of isMounted
  'react/no-is-mounted': 'error',
  // Prevent multiple component definition per file
  'react/no-multi-comp': 'off',
  // Prevent usage of the return value of React.render
  'react/no-render-return-value': 'error',
  // Prevent usage of setState
  'react/no-set-state': 'off',
  // Prevent using string references in ref attribute.
  'react/no-string-refs': 'warn',
  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 'off',
  // Enforce ES5 or ES6 class for React Components
  'react/prefer-es6-class': 'error',
  // Enforce stateless React Components to be written as a pure function
  'react/prefer-stateless-function': 'warn',
  // Prevent missing props validation in a React component definition
  'react/prop-types': 'warn',
  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 'error',
  // Restrict file extensions that may be required
  'react/require-extension': ['error', {extensions: ['.js']}],
  // Enforce React components to have a shouldComponentUpdate method
  'react/require-optimization': 'off',
  // Enforce ES5 or ES6 class for returning value in render function
  'react/require-render-return': 'error',
  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 'warn',
  // Enforce component methods order
  'react/sort-comp': 'off',
  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 'off',
  // Prevent missing parentheses around multilines JSX
  'react/wrap-multilines': 'warn',

  // JSX

  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': 'warn',
  // Validate closing bracket location in JSX
  'react/jsx-closing-bracket-location': ['warn', {location: 'tag-aligned'}],
  // Enforce or disallow spaces inside of curly braces in JSX attributes
  'react/jsx-curly-spacing': ['warn', 'never', {allowMultiline: true}],
  // Enforce or disallow spaces around equal signs in JSX attributes
  'react/jsx-equals-spacing': ['warn', 'never'],
  // Restrict file extensions that may contain JSX
  'react/jsx-filename-extension': ['warn', {extensions: ['.js']}],
  // Enforce position of the first prop in JSX
  'react/jsx-first-prop-new-line': ['warn', 'multiline'],
  // Enforce event handler naming conventions in JSX
  'react/jsx-handler-names': 'off',
  // Validate props indentation in JSX
  'react/jsx-indent-props': ['warn', 2],
  // Validate JSX indentation
  'react/jsx-indent': ['warn', 2],
  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': 'error',
  // Limit maximum of props on a single line in JSX
  'react/jsx-max-props-per-line': 'off',
  // Prevent usage of .bind() and arrow functions in JSX props
  'react/jsx-no-bind': 'off',
  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': 'error',
  // Prevent usage of unwrapped JSX strings
  'react/jsx-no-literals': 'off',
  // Prevent usage of unsafe target='_blank'
  'react/jsx-no-target-blank': 'error',
  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 'error',
  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': 'error',
  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 'off',
  // Enforce propTypes declarations alphabetical sorting (deprecated)
  'react/jsx-sort-prop-types': 'off',
  // Validate spacing before closing bracket in JSX
  'react/jsx-space-before-closing': ['warn', 'always'],
  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 'error',
  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 'error',
};
