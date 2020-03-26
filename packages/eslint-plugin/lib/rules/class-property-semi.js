const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Require (or disallow) semicolons for class properties.',
      category: 'Stylistic Issues',
      recommended: false,
      uri: docsUrl('class-property-semi'),
    },
    fixable: 'code',
    schema: [
      {
        enum: ['always', 'never'],
      },
    ],
  },

  create(context) {
    const config = context.options[0] || 'always';
    const always = config === 'always';

    function isSemicolon(token) {
      return token.type === 'Punctuator' && token.value === ';';
    }

    function checkClassProperty(node) {
      const lastToken = context.getLastToken(node);
      const hasSemicolon = isSemicolon(lastToken);

      if (always && !hasSemicolon) {
        context.report({
          node,
          message: 'Missing semicolon.',
          fix(fixer) {
            fixer.insertTextAfter(lastToken, ';');
          },
        });
      } else if (!always && hasSemicolon) {
        context.report({
          node,
          message: 'Extra semicolon.',
          fix(fixer) {
            fixer.remove(lastToken);
          },
        });
      }
    }

    return {
      ClassProperty: checkClassProperty,
    };
  },
};
