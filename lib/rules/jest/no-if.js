const {docsUrl} = require('../../utilities');
const {getTestMethodName} = require('../../utilities/jest');

const TEST_FUNCTION_NAMES = ['it', 'xit', 'fit', 'test', 'xtest'];

module.exports = {
  meta: {
    docs: {
      description: 'Prevent if statements in tests.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('jest/no-if'),
    },
    messages: {
      noIf: [
        'Tests should not contain if statements.',
        'This is usually an indication that you',
        'are attempting to test too much at once',
        'or not testing what you intend to.',
        'Consider breaking the if statement out',
        'into a separate test to resolve this error.',
      ].join(' '),
      noConditional: [
        'Tests should not contain conditional statements.',
        'This is usually an indication that you',
        'are attempting to test too much at once',
        'or not testing what you intend to.',
        'Consider breaking the conditional statement out',
        'into a separate test to resolve this error.',
      ].join(' '),
    },
  },

  create(context) {
    let callExpressionDepth = 0;

    return {
      CallExpression(node) {
        if (ignore(node)) {
          return;
        }
        callExpressionDepth++;
      },
      IfStatement(node) {
        if (callExpressionDepth === 0) {
          return;
        }

        context.report({
          messageId: 'noIf',
          node,
        });
      },
      ConditionalExpression(node) {
        if (callExpressionDepth === 0) {
          return;
        }

        context.report({
          messageId: 'noConditional',
          node,
        });
      },
      'CallExpression:exit': (node) => {
        if (ignore(node)) {
          return;
        }
        callExpressionDepth--;
      },
    };
  },
};

function ignore(node) {
  return notTestFunction(node) || hasEmptyBody(node);
}

function notTestFunction(node) {
  const method = getTestMethodName(node);
  return !matchTestFunctionName(method);
}

function matchTestFunctionName(functionName) {
  return TEST_FUNCTION_NAMES.includes(functionName);
}

function hasEmptyBody(node) {
  return (
    node.arguments &&
    node.arguments.length === 2 &&
    node.arguments[1].type === 'ArrowFunctionExpression' &&
    node.arguments[1].body &&
    node.arguments[1].body.body &&
    node.arguments[1].body.body.length === 0
  );
}
