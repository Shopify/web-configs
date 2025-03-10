const {docsUrl} = require('../utilities');

const message =
  'Do not override the native context menu. It almost always goes against users expectations and results in worse accessibility.';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow contextmenu event listeners',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('no-context-menu'),
    },
  },
  create(context) {
    return {
      // Check for inline contextmenu event handlers
      JSXAttribute(node) {
        if (node.name.name === 'onContextMenu') {
          context.report({
            node,
            message,
          });
        }
      },

      // Check for addEventListener('contextmenu', ...)
      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.property.name === 'addEventListener' &&
          node.arguments?.[0]?.value === 'contextmenu'
        ) {
          context.report({
            node,
            message,
          });
        }

        // Check for useEventListener('contextmenu', ...)
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'useEventListener' &&
          node.arguments?.[0]?.value === 'contextmenu'
        ) {
          context.report({
            node,
            message,
          });
        }
      },
    };
  },
};
