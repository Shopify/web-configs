const {elementType, hasProp} = require('jsx-ast-utils');

const {docsUrl, polarisComponentFromJSX} = require('../utilities');

const POLARIS_MEDIA_COMPONENTS = ['Image'];
const STANDARD_MEDIA_ELEMENTS = ['img', 'video'];

module.exports = {
  meta: {
    docs: {
      description:
        'Require explicit dimensions on media elements to prevent layout shift.',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('require-media-dimensions'),
    },
    schema: {
      mediaElements: {
        type: 'array',
        items: {
          type: 'string',
        },
        uniqueItems: true,
      },
    },
  },

  create(context) {
    return {
      JSXElement: (node) => {
        if (!isKnownMediaElement(node, context)) {
          return;
        }

        const elementName = elementType(node.openingElement);
        const hasWidthProp = hasProp(node.openingElement.attributes, 'width');
        const hasHeightProp = hasProp(node.openingElement.attributes, 'height');

        if (!hasWidthProp) {
          context.report(
            node,
            `Unspecified explicit \`width\` prop for ${elementName}.`,
          );
        }
        if (!hasHeightProp) {
          context.report(
            node,
            `Unspecified explicit \`height\` prop for ${elementName}.`,
          );
        }
      },
    };
  },
};

function isKnownMediaElement(node, context) {
  const maybePolarisComponent = polarisComponentFromJSX(node, context);
  const additionalMediaElements = context.options[0]?.mediaElements || [];

  const elementName = elementType(node.openingElement);
  const combinedMediaElements = [
    ...STANDARD_MEDIA_ELEMENTS,
    ...additionalMediaElements,
  ];

  return (
    combinedMediaElements.includes(elementName) ||
    POLARIS_MEDIA_COMPONENTS.includes(maybePolarisComponent)
  );
}
