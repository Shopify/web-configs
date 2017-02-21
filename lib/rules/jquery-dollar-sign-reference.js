var JQUERY_IDENTIFIERS = ['$', 'jQuery'];

var nonChainingMethods = {
  context: true,
  get: true,
  hasClass: true,
  height: true,
  index: true,
  innerHeight: true,
  innerWidth: true,
  is: true,
  offset: true,
  outerHeight: true,
  outerWidth: true,
  position: true,
  promise: true,
  scrollLeft: true,
  scrollTop: true,
  serialize: true,
  serializeArray: true,
  size: true,
  text: true,
  toArray: true,
  triggerHandler: true,
  val: true,
  width: true,

  attr: function(node) {
    return node.arguments.length < 2 && node.arguments[0] && node.arguments[0].type !== 'ObjectExpression';
  },
  data: function(node) {
    return node.arguments.length < 2 && node.arguments[0] && node.arguments[0].type !== 'ObjectExpression';
  },
  html: function(node) {
    return node.arguments.length === 0;
  },
  prop: function(node) {
    return node.arguments.length < 2 && node.arguments[0] && node.arguments[0].type !== 'ObjectExpression';
  },
};

var JQUERY_IDENTIFIER_REGEX = /^\$./;

module.exports = {
  meta: {
    docs: {},
  },

  create: function(context) {
    function getFinalReferenceName(node) {
      switch (node.type) {
        case 'Identifier': return node.name;
        case 'Literal': return node.value;
        case 'MemberExpression': return getFinalReferenceName(node.property);
        default: return null;
      }
    }

    function isjQueryReference(node) {
      return JQUERY_IDENTIFIER_REGEX.test(getFinalReferenceName(node));
    }

    function isjQueryCallExpression(node) {
      return isCallExpression(node) && JQUERY_IDENTIFIERS.indexOf(node.callee.name) >= 0;
    }

    function isCallExpression(node) {
      return node.type === 'CallExpression';
    }

    function isjQueryTerminatedMemberExpression(node) {
      return node.type === 'MemberExpression' && (
        (node.computed && node.property.type === 'Literal' && isjQueryReference(node.property)) ||
        (!node.computed && isjQueryReference(node.property))
      );
    }

    function isMemberExpressionWithComputedNonLiteralProperty(node) {
      return node.type === 'MemberExpression' && node.computed && node.property.type !== 'Literal';
    }

    function isjQueryStartValue(node) {
      return (
        (node.type === 'Identifier' && isjQueryReference(node)) ||
        isjQueryCallExpression(node) ||
        isjQueryTerminatedMemberExpression(node)
      );
    }

    function isLooseUndefined(node) {
      return (
        (node.type === 'Identifier' && node.name === 'undefined') ||
        (node.type === 'Literal' && node.value === null)
      );
    }

    function isjQueryValue(node) {
      var relevantNode = node;
      var validChain = true;

      while (relevantNode.callee && relevantNode.callee.type === 'MemberExpression') {
        var prop = relevantNode.callee.property.name;

        var checkDescriptor = Object.getOwnPropertyDescriptor(nonChainingMethods, prop);
        var check = checkDescriptor && checkDescriptor.value;
        if (check === true || (typeof check === 'function' && check(relevantNode))) {
          validChain = false;
        }

        relevantNode = relevantNode.callee.object;
      }

      var isjQueryStart = isjQueryStartValue(relevantNode);
      var definiteNo = isjQueryStart && !validChain;
      var definiteYes = isjQueryStart && validChain;
      return {
        definite: definiteYes,
        possible: definiteYes || (
          !definiteNo && (
            isLooseUndefined(node) ||
            (isjQueryStart && node.type === 'Identifier') ||
            isCallExpression(node) ||
            isMemberExpressionWithComputedNonLiteralProperty(node)
          )
        ),
      };
    }

    function getValueNodes(node) {
      var results = [];
      if (node.type === 'LogicalExpression') {
        results.push.apply(results, getValueNodes(node.left));
        results.push.apply(results, getValueNodes(node.right));
      } else if (node.type === 'ConditionalExpression') {
        results.push.apply(results, getValueNodes(node.consequent));
        results.push.apply(results, getValueNodes(node.alternate));
      } else {
        results.push(node);
      }
      return results;
    }

    function checkForValidjQueryReference(node, left, right) {
      if (right == null) { return; }
      var isjQueryRef = isjQueryReference(left);
      var valueNodeTypes = getValueNodes(right).map(isjQueryValue);
      var hasDefinitejQueryValue = valueNodeTypes.some(function(nodeType) {
        return nodeType.definite;
      });
      var hasRegularValue = valueNodeTypes.some(function(nodeType) {
        return !nodeType.possible;
      });

      if (isjQueryRef && hasRegularValue) {
        context.report(node, 'Don’t use a $-prefixed identifier for a non-jQuery value.');
      } else if (!isjQueryRef && hasDefinitejQueryValue) {
        context.report(node, 'Use a $-prefixed identifier for a jQuery value.');
      }
    }

    function getFinalAssignmentValue(node) {
      var currentNode = node;

      while (currentNode && currentNode.type === 'AssignmentExpression') {
        currentNode = currentNode.right;
      }

      return currentNode;
    }

    function checkVariableDeclarator(node) {
      checkForValidjQueryReference(node, node.id, getFinalAssignmentValue(node.init));
    }

    function checkAssignmentExpression(node) {
      if (isMemberExpressionWithComputedNonLiteralProperty(node.left)) {
        return;
      }

      checkForValidjQueryReference(node, node.left, getFinalAssignmentValue(node.right));
    }

    function checkObjectExpression(node) {
      node.properties.forEach(function(prop) {
        if (prop.computed && prop.key.type !== 'Literal') {
          return;
        }

        checkForValidjQueryReference(prop, prop.key, prop.value);
      });
    }

    function checkClassProperty(node) {
      var tokens = context.getFirstTokens(node, 2).filter(function(token) {
        return token.type === 'Identifier';
      });

      var id = tokens[tokens.length - 1];
      var fakeIdentifier = Object.create(id, {
        name: {get: function() { return this.value; }},
      });

      checkForValidjQueryReference(node, fakeIdentifier, node.value);
    }

    return {
      VariableDeclarator: checkVariableDeclarator,
      AssignmentExpression: checkAssignmentExpression,
      ObjectExpression: checkObjectExpression,
      ClassProperty: checkClassProperty,
    };
  },
};
