const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Prevent the usage of unnecessary computed properties.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('no-useless-computed-properties'),
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
