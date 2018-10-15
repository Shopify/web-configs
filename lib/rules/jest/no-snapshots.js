module.exports = {
  meta: {
    docs: {
      description: 'Disallows jest snapshots.',
      category: 'Best Practices',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/jest/no-snapshots.md',
    },
  },

  create(context) {
    return {
      CallExpression({callee: {property}}) {
        if (isSnapshot(property && property.name)) {
          context.report({
            message:
              'Do not use {{method}} or related methods that generate jest snapshots.',
            node: property,
            data: {method: property.name},
          });
        }
      },
    };
  },
};

function isSnapshot(name) {
  return [
    'toMatchSnapshot',
    'toMatchInlineSnapshot',
    'toThrowErrorMatchingSnapshot',
    'toThrowErrorMatchingInlineSnapshot',
  ].some((method) => method === name);
}
