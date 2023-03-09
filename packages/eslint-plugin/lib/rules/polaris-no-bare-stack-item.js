const {docsUrl, polarisComponentFromJSX} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description:
        'Disallow the use of Polaris’s `LegacyStack.Item` without any custom props.',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('polaris-no-bare-stack-item'),
    },
    schema: [],
  },

  create(context) {
    return {
      JSXElement(node) {
        const component = polarisComponentFromJSX(node, context);
        if (
          component === 'LegacyStack.Item' &&
          node.openingElement.attributes.length === 0
        ) {
          context.report({
            node,
            message:
              'You don’t need to wrap content in a LegacyStack.Item unless you need to customize one of its props.',
          });
        }
      },
    };
  },
};
