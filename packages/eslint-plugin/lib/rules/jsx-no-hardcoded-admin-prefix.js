const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Disallow hardcoded /admin occurrences in Route components.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('jsx-no-hardcoded-admin-prefix'),
    },
  },

  create(context) {
    return {
      JSXElement(node) {
        const adminPrefixFound = hasAdminPrefix(node);

        if (adminPrefixFound) {
          context.report(
            node,
            `Do not use hardcoded path prefix /admin in Route components.`,
          );
        }
      },
    };
  },
};

function hasAdminPrefix(node) {
  function isInvalidContent(contentNode) {
    if (
      contentNode.type === 'Literal' ||
      contentNode.type === 'JSXText' ||
      typeof contentNode.value === 'string'
    ) {
      return contentNode.value && containsAdmin(contentNode.value);
    } else if (contentNode.type === 'JSXExpressionContainer') {
      return isInvalidContent(contentNode.expression);
    } else if (contentNode.type === 'TemplateLiteral') {
      return contentNode.quasis.some(isInvalidContent);
    } else if (contentNode.type === 'TemplateElement') {
      return containsAdmin(contentNode.value.raw);
    }
  }

  function containsAdmin(value) {
    return value.startsWith('/admin/') || value === '/admin';
  }

  function isInvalidProp(propNode) {
    return (
      propNode.type === 'JSXAttribute' &&
      propNode.name &&
      propNode.name.name === 'path' &&
      isInvalidContent(propNode.value)
    );
  }

  return (
    node.openingElement.name.name === 'Route' &&
    node.openingElement.attributes &&
    node.openingElement.attributes.find(isInvalidProp)
  );
}
