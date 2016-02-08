var MESSAGES = {
  always: 'You must include parentheses around a binary assignment expression.',
  never: 'You must not include parentheses around a binary assignment expression.',
};

var BOOLEAN_OPERATORS = ['==', '===', '!=', '!==', '>', '>=', '<', '<='];

module.exports = function(context) {
  var config = context.options[0] || 'always';
  var shouldHaveParens = (config === 'always');

  function hasParens(node) {
    var beforeToken = context.getTokenBefore(node);
    var hasBeforeParen = beforeToken && (beforeToken.type === 'Punctuator') && (beforeToken.value === '(');
    var afterToken = context.getTokenAfter(node);
    var hasAfterParen = afterToken && (afterToken.type === 'Punctuator') && (afterToken.value === ')');

    return hasBeforeParen && hasAfterParen;
  }

  function evaluateBinaryExpression(node) {
    if (BOOLEAN_OPERATORS.indexOf(node.operator) < 0) { return; }

    if (shouldHaveParens !== hasParens(node)) {
      context.report(node, MESSAGES[config]);
    }
  }

  function evaluateLogicalExpression(node) {
    [node.left, node.right].forEach(evaluateAssignmentExpression);
  }

  function evaluateAssignmentExpression(node) {
    if (!node) { return; }

    if (node.type === 'BinaryExpression') { evaluateBinaryExpression(node); }
    if (node.type === 'LogicalExpression') { evaluateLogicalExpression(node); }
  }

  return {
    VariableDeclarator: function(node) {
      evaluateAssignmentExpression(node.init);
    },

    AssignmentExpression: function(node) {
      evaluateAssignmentExpression(node.right);
    },
  };
};

module.exports.schema = [{
  enum: ['always', 'never'],
}];
