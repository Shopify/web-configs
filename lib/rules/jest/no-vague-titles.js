const VAGUE_TERMS = {
  should: /should/i,
  correct: /correct/i,
  appropriate: /appropriate/i,
  all: /\ball\b/i,
  properly: /properly/i,
};

const TEST_FUNCTION_NAMES = [
  'it',
  'xit',
  'fit',
  'test',
  'xtest',
  'describe',
  'fdescribe',
  'xdescribe',
];

module.exports = {
  meta: {
    docs: {
      description: 'Prevent the usage of vague words in test statements.',
      category: 'Best Practices',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/no-vague-titles.md',
    },
    schema: [
      {
        type: 'object',
        properties: {
          ignore: {
            type: 'array',
            items: {enum: TEST_FUNCTION_NAMES},
          },
          allow: {
            type: 'array',
            items: {enum: Object.keys(VAGUE_TERMS)},
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const options = context.options[0] || {};
    const ignored = options.ignore || [];
    const allowed = options.allow || [];

    function isIgnoredFunctionName(node) {
      const method = getMethodName(node);
      return ignored.some((ignoredMethod) => ignoredMethod === method);
    }

    function validate(node) {
      if (
        notTestFunction(node) ||
        isIgnoredFunctionName(node) ||
        hasEmptyDescription(node)
      ) {
        return;
      }

      const description = getDescription(node);

      if (containsVagueWord(description, allowed)) {
        const method = getMethodName(node);

        context.report({
          message: `{{ method }} description should not contain vague words. Be sure the description meaningfully illustrates the purpose of this test.`,
          data: {
            method,
          },
          node,
        });
      }
    }

    return {
      CallExpression(node) {
        validate(node);
      },
    };
  },
};

function notTestFunction(node) {
  const method = getMethodName(node);
  return !matchTestFunctionName(method);
}

function matchTestFunctionName(functionName) {
  return TEST_FUNCTION_NAMES.includes(functionName);
}

function hasEmptyDescription({arguments: args}) {
  return (
    !args ||
    !args[0] ||
    (args[0].type !== 'Literal' && args[0].type !== 'TemplateLiteral')
  );
}

function getMethodName({callee}) {
  switch (callee.type) {
    case 'CallExpression':
      return callee.callee.object
        ? callee.callee.object.name
        : callee.callee.name;
    case 'Identifier':
      return callee.name;
    case 'MemberExpression':
      return callee.object.name;
    default:
      return false;
  }
}

function getDescription({arguments: args}) {
  const firstArgument = args[0];

  if (firstArgument.type === 'TemplateLiteral') {
    return firstArgument.quasis
      .map((templateLiteral) => {
        return templateLiteral.value.raw;
      })
      .join('');
  }

  return firstArgument && firstArgument.value;
}

function containsVagueWord(description, allowed) {
  return Object.entries(VAGUE_TERMS).find(
    ([word, regex]) =>
      allowed.includes(word) ? false : description.match(regex),
  );
}
