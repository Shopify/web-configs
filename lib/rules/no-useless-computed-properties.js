module.exports = {
  meta: {
    docs: {},
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
