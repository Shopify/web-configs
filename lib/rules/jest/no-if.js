const {docsUrl} = require('../../utilities');
const {isTestDefinition, isTestArrowFunction} = require('../../utilities/jest');

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
        'If your conditionals are required to',
        'satisfy the typescript type checker, consider',
        'using a non-null assertion operator (!) instead.',
      ].join(' '),
      noConditional: [
        'Tests should not contain conditional statements.',
        'This is usually an indication that you',
        'are attempting to test too much at once',
        'or not testing what you intend to.',
        'Consider writing a separate test for',
        'each fork in the conditional statement.',
        'If your conditionals are required to',
        'satisfy the typescript type checker, consider',
        'using a non-null assertion operator (!) instead.',
      ].join(' '),
    },
  },

  create(context) {
    const stack = [];

    function validate(node) {
      if (!stack[stack.length - 1]) {
        return;
      }

      const messageId =
        node.type === 'ConditionalExpression' ? 'noConditional' : 'noIf';

      context.report({
        messageId,
        node,
      });
    }

    return {
      CallExpression(node) {
        stack.push(isTestDefinition(node));
      },
      FunctionExpression() {
        stack.push(false);
      },
      FunctionDeclaration() {
        stack.push(false);
      },
      ArrowFunctionExpression(node) {
        stack.push(isTestArrowFunction(node));
      },
      IfStatement: validate,
      ConditionalExpression: validate,
      'CallExpression:exit': function() {
        stack.pop();
      },
      'FunctionExpression:exit': function() {
        stack.pop();
      },
      'FunctionDeclaration:exit': function() {
        stack.pop();
      },
      'ArrowFunctionExpression:exit': function() {
        stack.pop();
      },
    };
  },
};
