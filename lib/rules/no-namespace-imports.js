const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Prevent namespace import declarations.',
      category: 'Stylistic Issues',
      recommended: false,
      uri: docsUrl('no-namespace-imports'),
    },
    schema: [
      {
        type: 'object',
        properties: {
          allow: {
            type: 'array',
            items: {type: 'string'},
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      namespaceImport: `The namespace import declaration for {{name}} should be converted to a default or named import.`,
    },
  },
  create(context) {
    const options = context.options[0] || {};
    const allowed = options.allow || [];

    function report(node) {
      const name = node.source.value;

      context.report({
        node,
        messageId: 'namespaceImport',
        data: {name},
      });
    }

    return {
      ImportDeclaration(node) {
        if (allowed.length && ignoreModule(node, allowed)) {
          return;
        }

        const namespaceSpecifiers = getNamespaceSpecifiers(node);

        if (namespaceSpecifiers.length === 0) {
          return;
        }

        report(node);
      },
    };
  },
};

function getNamespaceSpecifiers(node) {
  return node.specifiers.filter((specifier) => {
    return specifier.type === 'ImportNamespaceSpecifier';
  });
}

function ignoreModule(node, allowed) {
  const regex = new RegExp(allowed.join('|'));

  return regex.test(node.source.value);
}
