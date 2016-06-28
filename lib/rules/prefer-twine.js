module.exports = function(context) {
  return {
    ImportDeclaration: function(node) {
      if (node.source.value !== 'twine') { return; }
      node.specifiers.forEach(function(specifier) {
        if (specifier.type !== 'ImportDefaultSpecifier') { return; }
        if (specifier.local.name !== 'Twine') {
          context.report(node, 'You should use "Twine" as the reference name when importing twine.');
        }
      });
    },
  };
};
