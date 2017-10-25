module.exports = {
  meta: {
    docs: {},
  },

  create(context) {
    function isStaticMember(node) {
      return (
        (node.type === 'MethodDefinition' || node.type === 'ClassProperty') &&
        node.static
      );
    }

    function checkClass(node) {
      const members = node.body.body;
      if (
        node.superClass == null &&
        members.length &&
        members.every(isStaticMember)
      ) {
        context.report({
          node,
          message:
            'Classes declaring only static members should be objects or named exports instead.',
        });
      }
    }

    return {
      ClassDeclaration: checkClass,
      ClassExpression: checkClass,
    };
  },
};
