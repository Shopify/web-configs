module.exports = function(context) {

  var config = context.options[0] || 'always';
  var always = (config === 'always');

  function isSemicolon(token) {
    return token.type === 'Punctuator' && token.value === ';';
  }

  function checkClassProperty(node) {
    var lastToken = context.getLastToken(node);
    var hasSemicolon = isSemicolon(lastToken);

    if (always && !hasSemicolon) {
      context.report({
        node: node,
        message: 'Missing semicolon.',
        fix: function(fixer) {
          fixer.insertTextAfter(lastToken, ';');
        },
      });
    } else if (!always && hasSemicolon) {
      context.report({
        node: node,
        message: 'Extra semicolon.',
        fix: function(fixer) {
          fixer.remove(lastToken);
        },
      });
    }
  }

  return {
    ClassProperty: checkClassProperty,
  };

};

module.exports.schema = [{
  enum: ['always', 'never'],
}];
