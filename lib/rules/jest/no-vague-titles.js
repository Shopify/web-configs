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

    function isIgnoredFunctionName({callee}) {
      return ignored.some(
        (method) =>
          callee.name ? method === callee.name : method === callee.object.name,
      );
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
        context.report({
          message: `{{ method }} description should not contain vague words. Be sure the description meaningfully illustrates the purpose of this test.`,
          data: {
            method: node.callee.name
              ? node.callee.name
              : node.callee.object.name,
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

function notTestFunction({callee}) {
  if (callee.name) {
    return !matchTestFunctionName(callee.name);
  }

  return callee.object && !matchTestFunctionName(callee.object.name);
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
