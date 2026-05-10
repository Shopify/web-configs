const {docsUrl} = require('../utilities');

const defaultMaximumStatements = 1;

module.exports = {
  meta: {
    docs: {
      description:
        'Prefer early returns over full-body conditional wrapping in function declarations.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('prefer-early-return'),
    },
    schema: [
      {
        type: 'object',
        properties: {
          maximumStatements: {
            type: 'integer',
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const options = context.options[0] || {
      maximumStatements: defaultMaximumStatements,
    };
    const maxStatements = options.maximumStatements;

    function isLonelyIfStatement(statement) {
      return statement.type === 'IfStatement' && statement.alternate == null;
    }

    function isOffendingConsequent(consequent) {
      return (
        (consequent.type === 'ExpressionStatement' && maxStatements === 0) ||
        (consequent.type === 'BlockStatement' &&
          consequent.body.length > maxStatements)
      );
    }

    function isOffendingIfStatement(statement) {
      return (
        isLonelyIfStatement(statement) &&
        isOffendingConsequent(statement.consequent)
      );
    }

    function hasSimplifiableConditionalBody(functionBody) {
      if (!isBlockStatement(functionBody)) {
        return false;
      }

      const lastStatement = getLastStatement(functionBody);
      return Boolean(lastStatement) && isOffendingIfStatement(lastStatement);
    }

    function checkFunctionBody(functionNode) {
      const body = functionNode.body;

      if (isBlockStatement(body) && hasSimplifiableConditionalBody(body)) {
        context.report(
          getLastStatement(body),
          'Prefer an early return to a conditionally-wrapped function body',
        );
      }
    }

    return {
      FunctionDeclaration: checkFunctionBody,
      FunctionExpression: checkFunctionBody,
      ArrowFunctionExpression: checkFunctionBody,
    };
  },
};

function getLastStatement(statement) {
  return 'body' in statement && statement.body.length > 0
    ? statement.body[statement.body.length - 1]
    : undefined;
}

function isBlockStatement(statement) {
  return statement?.type === 'BlockStatement';
}
