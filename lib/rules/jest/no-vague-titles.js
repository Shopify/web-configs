module.exports = {
  meta: {
    docs: {
      description: 'Prevent the usage of vague words in test statements.',
      category: 'Best Practices',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/no-vague-titles.md',
    },
  },
  create(context) {
    const ignored = (context.options[0] && context.options[0].ignore) || [];

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

      if (containsVagueWord(description)) {
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
  return (
    functionName === 'it' ||
    functionName === 'xit' ||
    functionName === 'fit' ||
    functionName === 'test' ||
    functionName === 'xtest' ||
    functionName === 'describe' ||
    functionName === 'fdescribe' ||
    functionName === 'xdescribe'
  );
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
      return callee.callee.object.name;
    case 'Identifier':
      return callee.name;
    case 'MemberExpression':
      return callee.object.name;
    case 'ArrowFunctionExpression':
      return '';
    default:
      throw new Error('Could not get method name from node.');
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

function containsVagueWord(description) {
  const vagueTerms = [/correct/i, /appropriate/i, /( )*all(\.|\s)/i];
  return vagueTerms.find((term) => description.match(term));
}
