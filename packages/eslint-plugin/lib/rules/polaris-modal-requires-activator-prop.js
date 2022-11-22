const {docsUrl, polarisComponentFromJSX} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description:
        'Polaris <Modal /> and components that extend it must provide an `activator` prop to ensure proper keyboard focus handling on close',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('polaris-modal-requires-activator-prop'),
    },
    schema: [],
  },

  create(context) {
    return {
      JSXElement(node) {
        const component = polarisComponentFromJSX(node, context);
        if (
          component === 'Modal' &&
          node.openingElement.attributes.filter(
            (attribute) => attribute.name.name === 'activator',
          ).length === 0
        ) {
          context.report({
            node,
            message:
              "Polaris <Modal /> should have an 'activator' prop to ensure correct keyboard focus handling on close.",
          });
        }
      },
    };
  },
};
