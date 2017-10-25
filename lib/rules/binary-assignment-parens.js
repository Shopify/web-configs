const MESSAGES = {
  always: 'You must include parentheses around a binary assignment expression.',
  never:
    'You must not include parentheses around a binary assignment expression.',
};

const BOOLEAN_OPERATORS = ['==', '===', '!=', '!==', '>', '>=', '<', '<='];

module.exports = {
  meta: {
    docs: {},

    schema: [
      {
        enum: ['always', 'never'],
      },
    ],
  },

  create(context) {
    const config = context.options[0] || 'always';
    const shouldHaveParens = config === 'always';

    function hasParens(node) {
      const beforeToken = context.getTokenBefore(node);
      const hasBeforeParen =
        beforeToken &&
        beforeToken.type === 'Punctuator' &&
        beforeToken.value === '(';
      const afterToken = context.getTokenAfter(node);
      const hasAfterParen =
        afterToken &&
        afterToken.type === 'Punctuator' &&
        afterToken.value === ')';

      return hasBeforeParen && hasAfterParen;
    }

    function evaluateBinaryExpression(node) {
      if (BOOLEAN_OPERATORS.indexOf(node.operator) < 0) {
        return;
      }

      if (shouldHaveParens !== hasParens(node)) {
        context.report(node, MESSAGES[config]);
      }
    }

    function evaluateLogicalExpression(node) {
      [node.left, node.right].forEach(evaluateAssignmentExpression);
    }

    function evaluateAssignmentExpression(node) {
      if (!node) {
        return;
      }

      if (node.type === 'BinaryExpression') {
        evaluateBinaryExpression(node);
      }
      if (node.type === 'LogicalExpression') {
        evaluateLogicalExpression(node);
      }
    }

    return {
      VariableDeclarator(node) {
        evaluateAssignmentExpression(node.init);
      },

      AssignmentExpression(node) {
        evaluateAssignmentExpression(node.right);
      },
    };
  },
};
