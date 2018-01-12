const {polarisComponentFromJSX} = require('../utilities');

const COMPONENTS_WITH_SECTIONED_PROP = ['Popover', 'Card', 'Layout'];

module.exports = {
  meta: {
    docs: {
      description:
        'Prefer the use of the `sectioned` props in Polaris components instead of wrapping all contents in a `Section` component.',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },

  create(context) {
    return {
      JSXElement(node) {
        const {children} = node;
        const component = polarisComponentFromJSX(node, context);
        if (
          !component ||
          !COMPONENTS_WITH_SECTIONED_PROP.includes(component) ||
          children.length === 0 ||
          children.length > 1 ||
          children[0].type !== 'JSXElement' ||
          children[0].openingElement.attributes.length > 0
        ) {
          return;
        }

        const child = polarisComponentFromJSX(node.children[0], context);

        if (child === `${component}.Section`) {
          context.report(
            node,
            `Use the \`sectioned\` prop on ${component} instead of wrapping all its contents in a ${child}`,
          );
        }
      },
    };
  },
};
