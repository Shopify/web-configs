module.exports = {
  // Requires (or disallows) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
  'shopify/binary-assignment-parens': ['error', 'always'],
  // Requires (or disallows) semicolons for class properties.
  'shopify/class-property-semi': 'error',
  // Requires that all jQuery objects are assigned to references prefixed with `$`.
  'shopify/jquery-dollar-sign-reference': 'off',
  // disallow the use of debugger (without fixer to prevent autofix on save in editors)
  'shopify/no-debugger': 'error',
  // Prevents the usage of unnecessary computed properties.
  'shopify/no-useless-computed-properties': 'error',
  // Prevents the declaration of classes consisting only of static members.
  'shopify/no-fully-static-classes': 'error',
  // Prefer class properties to assignment of literals in constructors.
  'shopify/prefer-class-properties': 'off',
  // Prefer early returns over full-body conditional wrapping in function declarations.
  'shopify/prefer-early-return': ['error', {maximumStatements: 1}],
  // Prefer Twine over Bindings as the name for twine imports.
  'shopify/prefer-twine': 'error',
  // Prevents importing the entirety of a package.
  'shopify/restrict-full-import': 'off',
  // Restricts the use of specified sinon features.
  'shopify/sinon-no-restricted-features': 'off',
  // Requires the use of meaningful sinon assertions through sinon.assert or sinon-chai.
  'shopify/sinon-prefer-meaningful-assertions': 'off',
  // Requires that all dynamic imports contain a `webpackChunkName` comment.
  'shopify/webpack/no-unnamed-dynamic-imports': 'off',
};
