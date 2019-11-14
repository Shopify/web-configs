module.exports = {
  // Require (or disallow) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
  'shopify/binary-assignment-parens': ['error', 'always'],
  // Require (or disallow) semicolons for class properties.
  'shopify/class-property-semi': 'error',
  // Prevent images from being directly imported
  'shopify/images-no-direct-imports': 'error',
  // Disallow jest allMocks methods.
  'shopify/jest/no-all-mocks-methods': 'off',
  // Disallow jest snapshots.
  'shopify/jest/no-snapshots': 'off',
  // Disallow vague words in test statements.
  'shopify/jest/no-vague-titles': 'off',
  // Disallow complex expressions embedded in in JSX.
  'shopify/jsx-no-complex-expressions': 'off',
  // Disallow hardcoded content in JSX.
  'shopify/jsx-no-hardcoded-content': 'off',
  // Disallow useless wrapping elements in favour of fragment shorthand in JSX.
  'shopify/jsx-prefer-fragment-wrappers': 'off',
  // Prefer that imports from within a directory extend to the file from where they are importing without relying on an index file.
  'shopify/no-ancestor-directory-import': 'off',
  // Disallow the use of debugger (without fixer to prevent autofix on save in editors)
  'shopify/no-debugger': 'error',
  // Prevent namespace import declarations
  'shopify/no-namespace-imports': 'off',
  // Prevent the usage of unnecessary computed properties.
  'shopify/no-useless-computed-properties': 'error',
  // Prevent the declaration of classes consisting only of static members.
  'shopify/no-fully-static-classes': 'error',
  // Prefer the use of the `sectioned` props in Polaris components instead of wrapping all contents in a `Section` component.
  'shopify/polaris-prefer-sectioned-prop': 'off',
  // Disallow the use of Polaris’s `Stack.Item` without any custom props.
  'shopify/polaris-no-bare-stack-item': 'off',
  // Prefer class properties to assignment of literals in constructors.
  'shopify/prefer-class-properties': 'off',
  // Prefer early returns over full-body conditional wrapping in function declarations.
  'shopify/prefer-early-return': ['error', {maximumStatements: 1}],
  // Prefer that screaming snake case variables always be defined using `const`, and always appear at module scope.
  'shopify/prefer-module-scope-constants': 'error',
  // Prefer Twine over Bindings as the name for twine imports.
  'shopify/prefer-twine': 'error',
  // Restrict the number of returned items from React hooks.
  'shopify/react-hooks-strict-return': 'off',
  // Require that React component state be initialized when it has a non-empty type.
  'shopify/react-initialize-state': 'off',
  // Disallow multiple render methods in React component classes.
  'shopify/react-no-multiple-render-methods': 'off',
  // Prefer all non-React-specific members be marked private in React class components.
  'shopify/react-prefer-private-members': 'off',
  // Require that React component state be typed in TypeScript.
  'shopify/react-type-state': 'off',
  // Prevent importing the entirety of a package.
  'shopify/restrict-full-import': 'off',
  // Restrict the use of specified sinon features.
  'shopify/sinon-no-restricted-features': 'off',
  // Require the use of meaningful sinon assertions through sinon.assert or sinon-chai.
  'shopify/sinon-prefer-meaningful-assertions': 'off',
  // Prevent module imports between components.
  'shopify/strict-component-boundaries': 'error',
  // Enforces all TypeScript enums to be in pascal case
  'shopify/typescript/prefer-pascal-case-enums': 'off',
  // Enforces all TypeScript enums to be singular
  'shopify/typescript/prefer-singular-enums': 'off',
  // Require that all dynamic imports contain a `webpackChunkName` comment.
  'shopify/webpack/no-unnamed-dynamic-imports': 'off',
};
