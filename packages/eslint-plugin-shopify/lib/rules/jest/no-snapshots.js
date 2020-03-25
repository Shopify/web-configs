const {docsUrl} = require('../../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Disallows jest snapshots.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('jest/no-snapshots'),
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
