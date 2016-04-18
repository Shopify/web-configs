function createSinonMatcher(aliases, injected) {
  return function(object) {
    return (injected && object.type === 'ThisExpression') ||
      (object.type === 'Identifier' && aliases.indexOf(object.name) >= 0);
  };
}

function createPropertyMatcher(properties) {
  return function(property) {
    return property.type === 'Identifier' && properties.indexOf(property.name) >= 0;
  };
}

module.exports = function(context) {
  var options = context.options[0] || {};
  var restricted = options.restricted || [];
  var aliases = options.aliases || ['sinon'];
  var injected = options.injected || false;

  var sinonMatcher = createSinonMatcher(aliases, injected);
  var propertyMatcher = createPropertyMatcher(restricted);

  function checkMemberExpression(node) {
    if (sinonMatcher(node.object) && propertyMatcher(node.property)) {
      context.report({
        node: node,
        message: 'Unexpected use of sinon.' + node.property.name + '.',
      });
    }
  }

  return {
    MemberExpression: checkMemberExpression,
  };
};

module.exports.schema = [{
  type: 'object',
  properties: {
    restricted: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },

    aliases: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },

    injected: {
      type: 'boolean',
    },
  },
  additionalProperties: false,
}];
