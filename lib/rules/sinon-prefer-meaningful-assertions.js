// see http://sinonjs.org/docs/#assertions
const SINON_ASSERT = [
  'alwaysCalledOn',
  'alwaysCalledWith',
  'alwaysCalledWithExactly',
  'alwaysCalledWithMatch',
  'alwaysThrew',
  'callCount',
  'called',
  'calledOn',
  'calledOnce',
  'calledThrice',
  'calledTwice',
  'calledWith',
  'calledWithExactly',
  'calledWithMatch',
  'callOrder',
  'neverCalledWith',
  'neverCalledWithMatch',
  'notCalled',
  'threw',
];

// see https://github.com/domenic/sinon-chai
const SINON_CHAI = [
  'alwaysCalledOn',
  'alwaysCalledWith',
  'alwaysCalledWithExactly',
  'alwaysCalledWithMatch',
  'alwaysCalledWithNew',
  'alwaysReturned',
  'alwaysThrew',
  'callCount',
  'called',
  'calledAfter',
  'calledBefore',
  'calledOn',
  'calledOnce',
  'calledThrice',
  'calledTwice',
  'calledWith',
  'calledWithExactly',
  'calledWithMatch',
  'calledWithNew',
  'notCalled',
  'returned',
  'threw',
];

const PREFER_SINON_CHAI_MESSAGE =
  'Use the more meaningful sinon-chai assertions.';
const PREFER_SINON_ASSERT_MESSAGE =
  'Use the more meaningful sinon.assert assertions.';

module.exports = {
  meta: {
    docs: {},
  },

  create(context) {
    function getNearestFullExpression(node) {
      while (
        node.parent &&
        (node.parent.type === 'MemberExpression' ||
          node.parent.type === 'CallExpression')
      ) {
        // eslint-disable-next-line no-param-reassign
        node = node.parent;
      }

      return node;
    }

    function isAssertExpression(node) {
      return node.type === 'MemberExpression' && node.object.name === 'assert';
    }

    function isRewritableSinonExpression(node, methods) {
      if (!node) {
        return false;
      }
      return (
        (node.type === 'MemberExpression' &&
          methods.indexOf(node.property.name) >= 0) ||
        (node.type === 'CallExpression' &&
          isRewritableSinonExpression(node.callee, methods))
      );
    }

    /* eslint-disable prettier/prettier */
    // https://github.com/prettier/eslint-plugin-prettier/issues/65
    function isInvalidAssertCallExpression(node) {
      return isAssertExpression(node.callee) && node.arguments.some((arg) => {
        return isRewritableSinonExpression(arg, SINON_ASSERT);
      });
    }
    /* eslint-enable prettier/prettier*/

    function isInvalidShouldExpression(node) {
      return (
        node.property.name === 'should' &&
        isRewritableSinonExpression(node.object, SINON_CHAI)
      );
    }

    function isInvalidExpectCallExpression(node) {
      return (
        node.callee.name === 'expect' &&
        isRewritableSinonExpression(node.arguments[0], SINON_CHAI)
      );
    }

    function handleCallExpression(node) {
      if (isInvalidAssertCallExpression(node)) {
        context.report({
          node,
          message: PREFER_SINON_ASSERT_MESSAGE,
        });
      }

      if (isInvalidExpectCallExpression(node)) {
        context.report({
          node: getNearestFullExpression(node),
          message: PREFER_SINON_CHAI_MESSAGE,
        });
      }
    }

    function handleMemberExpression(node) {
      if (isInvalidShouldExpression(node)) {
        context.report({
          node: getNearestFullExpression(node),
          message: PREFER_SINON_CHAI_MESSAGE,
        });
      }
    }

    return {
      CallExpression: handleCallExpression,
      MemberExpression: handleMemberExpression,
    };
  },
};
