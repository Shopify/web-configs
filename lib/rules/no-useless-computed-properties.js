module.exports = function(context) {
  function hasLiteralComputedKey(prop) {
    return prop.computed && (prop.key.type === 'Literal');
  }

  function checkProperty(node) {
    if (hasLiteralComputedKey(node)) {
      context.report({
        node: node,
        message: 'Computed property is using a literal key unnecessarily. Use the key directly.',
      });
    }
  }

  return {
    MethodDefinition: checkProperty,
    Property: checkProperty,
  };
};
