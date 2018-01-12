module.exports = {
  meta: {
    docs: {
      description:
        'Prefer that screaming snake case variables always be defined using `const`, and always appear at module scope.',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },

  create(context) {
    let inConstDeclaration = false;

    return {
      VariableDeclaration(node) {
        inConstDeclaration = node.kind === 'const';
      },
      VariableDeclarator(node) {
        const {id} = node;

        if (id.type !== 'Identifier' || id.name !== id.name.toUpperCase()) {
          return;
        }

        if (!inConstDeclaration) {
          context.report(
            node,
            'You must use `const` when defining screaming snake case variables. If this is not a constant, use camelcase instead.',
          );
          return;
        }

        const scope = context.getScope();
        if (scope.type !== 'module') {
          context.report(
            node,
            'You must place screaming snake case at module scope. If this is not meant to be a module-scoped variable, use camelcase instead.',
          );
        }
      },
      'VariableDeclaration:exit': () => {
        inConstDeclaration = false;
      },
    };
  },
};
