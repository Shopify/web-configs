module.exports = {
  // Requires (or disallows) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
  'shopify/binary-assignment-parens': ['warn', 'always'],
  // Requires (or disallows) semicolons for class properties.
  'shopify/class-property-semi': 'warn',
  // Requires that all jQuery objects are assigned to references prefixed with `$`.
  'shopify/jquery-dollar-sign-reference': 'off',
  // Prevents the usage of unnecessary computed properties.
  'shopify/no-useless-computed-properties': 'error',
  // Prevents the declaration of classes consisting only of static members.
  'shopify/no-fully-static-classes': 'error',
  // Prefer class properties to assignment of literals in constructors.
  'shopify/prefer-class-properties': 'off',
  // Prefer early returns over full-body conditional wrapping in function declarations.
  'shopify/prefer-early-return': ['warn', {maximumStatements: 1}],
  // Requires (or disallows) @flow declarations be present at the top of each file.
  'shopify/require-flow': 'off',
  // Prevents importing the entirety of a package.
  'shopify/restrict-full-import': 'off',
  // Restricts the use of specified sinon features.
  'shopify/sinon-no-restricted-features': 'off',
  // Requires the use of meaningful sinon assertions through sinon.assert or sinon-chai.
  'shopify/sinon-prefer-meaningful-assertions': 'off',
};
