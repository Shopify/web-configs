const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Prefer Twine over Bindings as the name for twine imports.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('prefer-twine'),
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value !== 'twine') {
          return;
        }
        node.specifiers.forEach((specifier) => {
          if (specifier.type !== 'ImportDefaultSpecifier') {
            return;
          }
          if (specifier.local.name !== 'Twine') {
            context.report(
              node,
              'You should use "Twine" as the reference name when importing twine.',
            );
          }
        });
      },
    };
  },
};
