const {polarisComponentFromJSX} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description:
        'Disallow the use of Polaris’s `Stack.Item` without any custom props.',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },

  create(context) {
    return {
      JSXElement(node) {
        const component = polarisComponentFromJSX(node, context);
        if (
          component === 'Stack.Item' &&
          node.openingElement.attributes.length === 0
        ) {
          context.report({
            node,
            message:
              'You don’t need to wrap content in a Stack.Item unless you need to customize one of its props.',
          });
        }
      },
    };
  },
};
