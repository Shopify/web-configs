const {docsUrl} = require('../../utilities');
const {isTestDefinition} = require('../../utilities/jest');

module.exports = {
  meta: {
    docs: {
      description: 'Prefer using toThrow for exception tests.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('jest/no-try-expect'),
    },
    messages: {
      noTryExpect: [
        'Tests should use Jest‘s exception helpers.',
        'Use "expect(() => yourFunction()).toThrow()" for synchronous tests,',
        'or "await expect(yourFunction()).rejects.toThrow()" for async tests',
      ].join(' '),
    },
  },
  create(context) {
    let isTest = false;
    let catchDepth = 0;

    function isThrowExpectCall(node) {
      return catchDepth > 0 && node.callee.name === 'expect';
    }

    return {
      CallExpression(node) {
        if (isTestDefinition(node)) {
          isTest = true;
        } else if (isTest && isThrowExpectCall(node)) {
          context.report({
            messageId: 'noTryExpect',
            node,
          });
        }
      },
      CatchClause() {
        if (isTest) {
          ++catchDepth;
        }
      },
      'CatchClause:exit': function() {
        if (isTest) {
          --catchDepth;
        }
      },
      'CallExpression:exit': (node) => {
        if (isTestDefinition(node)) {
          isTest = false;
        }
      },
    };
  },
};
