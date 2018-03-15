const CONDITIONAL_EXPRESSION_WARNING = [
  'Don’t use conditional expressions inside JSX;',
  'they generally make your component harder to read.',
  'Instead, break that expression out into its own variable,',
  'and include the variable in JSX.',
].join(' ');

module.exports = {
  meta: {
    docs: {
      description: 'Disallow complex expressions embedded in in JSX.',
      category: 'Best Practices',
      recommended: true,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/jsx-no-complex-expressions.md',
    },
    schema: [],
  },

  create(context) {
    return {
      JSXExpressionContainer(node) {
        if (node.expression.type === 'ConditionalExpression') {
          context.report(node, CONDITIONAL_EXPRESSION_WARNING);
        }
      },
    };
  },
};
