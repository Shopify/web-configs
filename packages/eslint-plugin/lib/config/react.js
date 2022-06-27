module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {jsx: true},
  },

  plugins: ['react', 'jsx-a11y', 'react-hooks', '@shopify'],

  rules: {
    //
    // react
    //

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
    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': 'off',
    // Forbid certain elements e.g. forbid all <div /> and use <Box /> instead
    'react/forbid-elements': 'off',
    // Forbid foreign propTypes; forbids using another component's prop types unless they are explicitly imported/exported
    'react/forbid-foreign-prop-types': 'error',
    // Forbid certain propTypes
    'react/forbid-prop-types': ['error', {forbid: ['any', 'array']}],
    // Enforce using <> instead of <React.Fragment> for fragments
    'react/jsx-fragments': ['error', 'syntax'],
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
    'react/no-did-mount-set-state': 'off',
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
    // Prevent this from being used in stateless functional components
    'react/no-this-in-sfc': 'error',
    // Prevent common casing typos
    'react/no-typos': 'error',
    // Prevent using string references in ref attribute.
    'react/no-string-refs': 'error',
    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'off',
    // Prevent usage of UNSAFE_ methods
    'react/no-unsafe': ['error', {checkAliases: true}],
    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 'error',
    // Attempts to discover all state fields in a React component and warn if any of them are never read.
    'react/no-unused-state': 'error',
    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',
    // Enforce that props are read-only when defined in flow
    'react/prefer-read-only-props': 'off',
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
    // Enforce state initialization style
    'react/state-in-constructor': ['error', 'never'],
    // Enforce style prop value being an object
    'react/style-prop-object': 'error',
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'error',

    // JSX

    // Enforce a new line after jsx elements and expressions
    'react/jsx-newline': 'off',
    // Prevent usage of javascript: in URLs
    'react/jsx-no-script-url': 'error',
    // Prevent react contexts from taking non-stable values
    'react/jsx-no-constructed-context-values': 'error',
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'error',
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    'react/jsx-child-element-spacing': 'error',
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
    // checkFragmentShorthand - When true the rule will check if usage of the shorthand fragment syntax requires a key.
    // checkKeyMustBeforeSpread - When true the rule will check if key prop after spread to avoid createElement fallback.
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    // Validate a specific depth for JSX
    'react/jsx-max-depth': 'off',
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 'off',
    // Prevent usage of .bind() in JSX props
    // Disabled to allow for React hook patterns
    'react/jsx-no-bind': 'off',
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
    // Disallow multiple spaces between inline JSX props (fixable)
    'react/jsx-props-no-multi-spaces': 'error',
    // Enforce defaultProps declarations alphabetical sorting
    'react/jsx-sort-default-props': 'off',
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
    // Disallow JSX props spreading
    'react/jsx-props-no-spreading': 'off',

    //
    // react-hooks
    //

    // Only use Hooks at the top level of a React functional component or from within another custom hook.
    'react-hooks/rules-of-hooks': 'error',
    // Checks for missing useEffect dependencies
    'react-hooks/exhaustive-deps': 'error',

    //
    // jsx-a11y
    //

    // Enforce emojis are wrapped in and provide screenreader access.
    'jsx-a11y/accessible-emoji': 'error',
    // Enforce all elements that require alternative text have meaningful information to relay back to end user.
    'jsx-a11y/alt-text': 'error',
    // Enforce all anchors to contain accessible content.
    'jsx-a11y/anchor-has-content': 'error',
    // Enforce all anchors are valid, navigable elements.
    'jsx-a11y/anchor-is-valid': 'error',
    // Enforce elements with aria-activedescendant are tabbable.
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    // Enforce all aria-* props are valid.
    'jsx-a11y/aria-props': 'error',
    // Enforce ARIA state and property values are valid.
    'jsx-a11y/aria-proptypes': 'error',
    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
    'jsx-a11y/aria-role': 'error',
    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    'jsx-a11y/aria-unsupported-elements': 'error',
    // Enforce a clickable non-interactive element has at least one keyboard event listener.
    'jsx-a11y/click-events-have-key-events': 'error',
    // Enforce that a control (an interactive element) has a text label.
    'jsx-a11y/control-has-associated-label': 'error',
    // Enforce heading (h1, h2, etc) elements contain accessible content.
    'jsx-a11y/heading-has-content': 'error',
    // Enforce <html> element has lang prop.
    'jsx-a11y/html-has-lang': 'error',
    // Enforce iframe elements have a title attribute.
    'jsx-a11y/iframe-has-title': 'error',
    // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
    'jsx-a11y/img-redundant-alt': 'error',
    // Enforce that elements with interactive handlers like onClick must be focusable.
    'jsx-a11y/interactive-supports-focus': 'error',
    // Enforce that a label tag has a text label and an associated control.
    'jsx-a11y/label-has-associated-control': 'error',
    // Enforce that <label> elements have the htmlFor prop.
    'jsx-a11y/label-has-for': 'error',
    // Enforces that <audio> and <video> elements must have a <track> for captions.
    'jsx-a11y/media-has-caption': 'error',
    // Enforce lang attribute has a valid value.
    'jsx-a11y/lang': 'error',
    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
    'jsx-a11y/mouse-events-have-key-events': 'error',
    // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
    'jsx-a11y/no-access-key': 'error',
    // Enforce autoFocus prop is not used.
    'jsx-a11y/no-autofocus': 'error',
    // Enforce distracting elements are not used.
    'jsx-a11y/no-distracting-elements': 'error',
    // Interactive elements should not be assigned non-interactive roles.
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    // Non-interactive elements should not be assigned mouse or keyboard event listeners.
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    // Non-interactive elements should not be assigned interactive roles.
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    // tabIndex should only be declared on interactive elements.
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    // Enforce that onBlur is used instead of onChange.
    'jsx-a11y/no-onchange': 'off',
    // Enforce explicit role property is not the same as implicit/default role property on element.
    'jsx-a11y/no-redundant-roles': 'error',
    // Enforce non-interactive elements have no interactive handlers.
    'jsx-a11y/no-static-element-interactions': 'off',
    // Enforce that elements with ARIA roles must have all required attributes for that role.
    'jsx-a11y/role-has-required-aria-props': 'error',
    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
    'jsx-a11y/role-supports-aria-props': 'error',
    // Enforce scope prop is only used on <th> elements.
    'jsx-a11y/scope': 'error',
    // Enforce tabIndex value is not greater than zero.
    'jsx-a11y/tabindex-no-positive': 'error',

    //
    // Internal
    //

    '@shopify/react-hooks-strict-return': 'error',
    '@shopify/react-initialize-state': 'error',
    '@shopify/react-no-multiple-render-methods': 'error',
    '@shopify/react-prefer-private-members': 'error',
    '@shopify/react-require-autocomplete': 'error',
    '@shopify/react-type-state': 'error',
    '@shopify/jsx-no-complex-expressions': 'error',
    '@shopify/jsx-no-hardcoded-content': 'error',
    '@shopify/jsx-prefer-fragment-wrappers': 'error',
    'consistent-return': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Disable JS specific rules
        'react/jsx-filename-extension': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',

        // Breaks @typescript-eslint/parser
        'react/jsx-indent': 'off',
        'react/no-typos': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-wrap-multilines': 'off',
      },
    },
    {
      files: ['*.test.*'],
      rules: {
        'shopify/jsx-no-hardcoded-content': 'off',
      },
    },
  ],
};
