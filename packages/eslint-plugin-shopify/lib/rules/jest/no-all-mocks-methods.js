module.exports = {
  meta: {
    docs: {
      description: 'Disallows jest allMocks methods.',
      category: 'Best Practices',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/jest/no-all-mocks-methods.md',
    },
  },
  messages: {
    allMocksMethod:
      'Do not use {{method}} or related methods that are not explicit to a single mock. Instead, clear, reset and restore mocks individually.',
  },

  create(context) {
    return {
      Identifier(node) {
        if (isInvalidMocks(node.name)) {
          context.report({
            node,
            messageId: 'allMocksMethod',
            data: {method: node.name},
          });
        }
      },
    };
  },
};

function isInvalidMocks(name) {
  return [
    'resetAllMocks',
    'clearAllMocks',
    'restoreAllMocks',
    'resetModules',
  ].some((method) => method === name);
}
