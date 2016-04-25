module.exports = function(context) {
  function isStaticMember(node) {
    return (node.type === 'MethodDefinition' || node.type === 'ClassProperty') && node.static;
  }

  function checkClass(node) {
    var members = node.body.body;
    if (node.superClass == null && members.length && members.every(isStaticMember)) {
      context.report({
        node: node,
        message: 'Classes declaring only static members should be objects or named exports instead.',
      });
    }
  }

  return {
    ClassDeclaration: checkClass,
    ClassExpression: checkClass,
  };
};
