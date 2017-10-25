function createSinonMatcher(aliases, injected) {
  return function(object) {
    return (
      (injected && object.type === 'ThisExpression') ||
      (object.type === 'Identifier' && aliases.indexOf(object.name) >= 0)
    );
  };
}

function createPropertyMatcher(properties) {
  return function(property) {
    return (
      property.type === 'Identifier' && properties.indexOf(property.name) >= 0
    );
  };
}

module.exports = {
  meta: {
    docs: {},
    schema: [
      {
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
      },
    ],
  },

  create(context) {
    const options = context.options[0] || {};
    const restricted = options.restricted || [];
    const aliases = options.aliases || ['sinon'];
    const injected = options.injected || false;

    const sinonMatcher = createSinonMatcher(aliases, injected);
    const propertyMatcher = createPropertyMatcher(restricted);

    function checkMemberExpression(node) {
      if (sinonMatcher(node.object) && propertyMatcher(node.property)) {
        context.report({
          node,
          message: `Unexpected use of sinon.${node.property.name}.`,
        });
      }
    }

    return {
      MemberExpression: checkMemberExpression,
    };
  },
};
