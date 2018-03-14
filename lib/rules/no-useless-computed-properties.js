module.exports = {
  meta: {
    docs: {
      description: 'Prevent the usage of unnecessary computed properties.',
      category: 'Possible Errors',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/no-useless-computed-properties.md',
    },
  },

  create(context) {
    function hasLiteralComputedKey(prop) {
      return prop.computed && prop.key.type === 'Literal';
    }

    function checkProperty(node) {
      if (hasLiteralComputedKey(node)) {
        context.report({
          node,
          message: 'Computed property is using a literal key unnecessarily.',
        });
      }
    }

    return {
      MethodDefinition: checkProperty,
      Property: checkProperty,
    };
  },
};
