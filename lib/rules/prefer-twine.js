module.exports = {
  meta: {
    docs: {},
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
