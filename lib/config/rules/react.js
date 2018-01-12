module.exports = {
  // General

  // Enforces consistent naming for boolean props
  'react/boolean-prop-naming': 'off',
  // Prevent usage of button elements without an explicit type attribute
  'react/button-has-type': 'error',
  // Prevent missing displayName in a React component definition
  'react/display-name': ['error', {ignoreTranspilerName: false}],
  // Prevent extraneous defaultProps on components
  'react/default-props-match-prop-types': 'error',
  // Enforce consistent usage of destructuring assignment of props, state, and context
  'react/destructuring-assignment': 'off',
  // Forbid certain props on Components
  'react/forbid-component-props': 'off',
  // Forbid certain elements e.g. forbid all <div /> and use <Box /> instead
  'react/forbid-elements': 'off',
  // Forbid foreign propTypes; forbids using another component's prop types unless they are explicitly imported/exported
  'react/forbid-foreign-prop-types': 'error',
  // Forbid certain propTypes
  'react/forbid-prop-types': ['error', {forbid: ['any', 'array']}],
  // Prevent using this.state within a this.setState
  'react/no-access-state-in-setstate': 'error',
  // Prevent using Array index in key prop
  'react/no-array-index-key': 'error',
  // Prevent passing children as props
  'react/no-children-prop': 'error',
  // Prevent usage of dangerous JSX properties
  'react/no-danger': 'off',
  // Prevent problem with children and props.dangerouslySetInnerHTML
  'react/no-danger-with-children': 'error',
  // Prevent usage of deprecated methods
  'react/no-deprecated': 'error',
  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 'error',
  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 'error',
  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 'error',
  // Prevent usage of findDOMNode
  'react/no-find-dom-node': 'off',
  // Prevent usage of isMounted
  'react/no-is-mounted': 'error',
  // Prevent multiple component definition per file
  'react/no-multi-comp': 'off',
  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  'react/no-redundant-should-component-update': 'error',
  // Prevent usage of the return value of React.render
  'react/no-render-return-value': 'error',
  // Prevent usage of setState
  'react/no-set-state': 'off',
  // Prevent common casing typos
  'react/no-typos': 'error',
  // Prevent using string references in ref attribute.
  'react/no-string-refs': 'error',
  // Prevent invalid characters from appearing in markup
  'react/no-unescaped-entities': 'error',
  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 'off',
  // Prevent definitions of unused prop types
  'react/no-unused-prop-types': 'error',
  // Attempts to discover all state fields in a React component and warn if any of them are never read.
  'react/no-unused-state': 'error',
  // Prevent usage of setState in componentWillUpdate
  'react/no-will-update-set-state': 'error',
  // Enforce ES5 or ES6 class for React Components
  'react/prefer-es6-class': 'error',
  // Enforce stateless React Components to be written as a pure function
  'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
  // Prevent missing props validation in a React component definition
  'react/prop-types': 'error',
  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 'error',
  // Enforce a defaultProps definition for every prop that is not a required prop
  'react/require-default-props': 'off',
  // Enforce React components to have a shouldComponentUpdate method
  'react/require-optimization': 'off',
  // Enforce ES5 or ES6 class for returning value in render function
  'react/require-render-return': 'error',
  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 'error',
  // Enforce component methods order
  'react/sort-comp': 'off',
  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 'off',
  // Enforce style prop value being an object
  'react/style-prop-object': 'error',
  // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
  'react/void-dom-elements-no-children': 'error',

  // JSX

  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': 'error',
  // Validate closing bracket location in JSX
  'react/jsx-closing-bracket-location': ['error', {location: 'tag-aligned'}],
  // Validate closing tag location in JSX
  'react/jsx-closing-tag-location': 'error',
  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  'react/jsx-curly-brace-presence': ['error', 'never'],
  // Enforce or disallow spaces inside of curly braces in JSX attributes
  'react/jsx-curly-spacing': ['error', 'never', {allowMultiline: true}],
  // Enforce or disallow spaces around equal signs in JSX attributes
  'react/jsx-equals-spacing': ['error', 'never'],
  // Restrict file extensions that may contain JSX
  'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
  // Enforce position of the first prop in JSX
  'react/jsx-first-prop-new-line': ['error', 'multiline'],
  // Enforce event handler naming conventions in JSX
  'react/jsx-handler-names': 'off',
  // Validate props indentation in JSX
  'react/jsx-indent-props': ['error', 2],
  // Validate JSX indentation
  'react/jsx-indent': ['error', 2],
  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': 'error',
  // Limit maximum of props on a single line in JSX
  'react/jsx-max-props-per-line': 'off',
  // Prevent usage of .bind() and arrow functions in JSX props
  'react/jsx-no-bind': 'error',
  // Prevent comments from being inserted as text nodes
  'react/jsx-no-comment-textnodes': 'error',
  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': 'error',
  // Prevent usage of unwrapped JSX strings
  'react/jsx-no-literals': 'off',
  // Prevent usage of unsafe target='_blank'
  'react/jsx-no-target-blank': 'error',
  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 'error',
  // Limits every line in JSX to one expression each
  'react/jsx-one-expression-per-line': 'off',
  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': 'error',
  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 'off',
  // Enforce propTypes declarations alphabetical sorting (deprecated)
  'react/jsx-sort-prop-types': 'off',
  // Validate whitespace in and around the JSX opening and closing brackets
  'react/jsx-tag-spacing': 'error',
  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 'error',
  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 'error',
  // Prevent missing parentheses around multilines JSX
  'react/jsx-wrap-multilines': 'error',
};
