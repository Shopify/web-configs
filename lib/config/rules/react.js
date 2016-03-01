module.exports = {
  // Prevent missing displayName in a React component definition
  'react/display-name': [1, {acceptTranspilerName: true}],
  // Forbid certain propTypes
  'react/forbid-prop-types': [2, {forbid: ['any', 'array']}],
  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': 1,
  // Validate closing bracket location in JSX
  'react/jsx-closing-bracket-location': [1, {location: 'tag-aligned'}],
  // Enforce or disallow spaces inside of curly braces in JSX attributes
  'react/jsx-curly-spacing': [1, 'never', {allowMultiline: true}],
  // Enforce or disallow spaces around equal signs in JSX attributes
  'react/jsx-equals-spacing': [1, 'never'],
  // Validate props indentation in JSX
  'react/jsx-indent-props': [1, 2],
  // Validate JSX indentation
  'react/jsx-indent': [1, 2],
  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': 2,
  // Limit maximum of props on a single line in JSX
  'react/jsx-max-props-per-line': 0,
  // Prevent usage of .bind() and arrow functions in JSX props
  'react/jsx-no-bind': 0,
  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': 2,
  // Prevent usage of unwrapped JSX strings
  'react/jsx-no-literals': 0,
  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 2,
  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': 2,
  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 0,
  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 0,
  // Validate spacing before closing bracket in JSX
  'react/jsx-space-before-closing': [1, 'always'],
  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 2,
  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 2,
  // Prevent usage of dangerous JSX properties
  'react/no-danger': 1,
  // Prevent usage of deprecated methods
  'react/no-deprecated': 2,
  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 2,
  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 2,
  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 2,
  // Prevent usage of isMounted
  'react/no-is-mounted': 2,
  // Prevent multiple component definition per file
  'react/no-multi-comp': 0,
  // Prevent usage of setState
  'react/no-set-state': 0,
  // Prevent using string references in ref attribute.
  'react/no-string-refs': 1,
  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 0,
  // Prevent missing props validation in a React component definition
  'react/prop-types': 1,
  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 2,
  // Restrict file extensions that may be required
  'react/require-extension': [2, {extensions: ['.js']}],
  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 1,
  // Enforce component methods order
  'react/sort-comp': [
    1,
    {
      order: [
        'static-methods',
        'statics',
        'constructor',
        'lifecycle',
        'everything-else',
        'render',
      ],
    },
  ],
  // Prevent missing parentheses around multilines JSX
  'react/wrap-multilines': 1,
  'react/prefer-es6-class': 2,
};
