module.exports = {
  // Requires (or disallows) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
  'shopify/binary-assignment-parens': ['error', 'always'],
  // Requires (or disallows) semicolons for class properties.
  'shopify/class-property-semi': 'error',
  // Requires that all jQuery objects are assigned to references prefixed with `$`.
  'shopify/jquery-dollar-sign-reference': 'off',
  // Disallows complex expressions embedded in in JSX.
  'shopify/jsx-no-complex-expressions': 'off',
  // Disallows hardcoded content in JSX.
  'shopify/jsx-no-hardcoded-content': 'off',
  // disallow the use of debugger (without fixer to prevent autofix on save in editors)
  'shopify/no-debugger': 'error',
  // Prevents the usage of unnecessary computed properties.
  'shopify/no-useless-computed-properties': 'error',
  // Prevents the declaration of classes consisting only of static members.
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
  // Requires that React component state be initialized when it has a non-empty type.
  'shopify/react-initialize-state': 'off',
  // Requires that React component state be typed in TypeScript.
  'shopify/react-type-state': 'off',
  // Prevents importing the entirety of a package.
  'shopify/restrict-full-import': 'off',
  // Restricts the use of specified sinon features.
  'shopify/sinon-no-restricted-features': 'off',
  // Requires the use of meaningful sinon assertions through sinon.assert or sinon-chai.
  'shopify/sinon-prefer-meaningful-assertions': 'off',
  // Requires that all dynamic imports contain a `webpackChunkName` comment.
  'shopify/webpack/no-unnamed-dynamic-imports': 'off',
};
