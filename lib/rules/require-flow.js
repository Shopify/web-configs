var ALWAYS_MESSAGE = 'You must include a @flow declaration at the top of your file.';
var NEVER_MESSAGE = 'You must not include a @flow declaration in your file.';
var EXPLICIT_MESSAGE = 'You must include a @flow or @noflow declaration at the top of your file.';
var FLOW_REGEX = /@flow/;
var EXPLICIT_FLOW_REGEX = /@(no)?flow/;

function commentIsFlowDirective(comment, regex) {
  return Boolean(comment) && comment.start === 0 && regex.test(comment.value);
}

module.exports = function(context) {
  var config = context.options[0] || 'always';

  return {
    Program: function(node) {
      var commentNode = node.comments && node.comments[0];
      var isFlowDirective = commentIsFlowDirective(commentNode, config === 'explicit' ? EXPLICIT_FLOW_REGEX : FLOW_REGEX);

      switch (config) {
      case 'always':
        if (!isFlowDirective) {
          context.report(node, ALWAYS_MESSAGE);
        }
        break;

      case 'explicit':
        if (!isFlowDirective) {
          context.report(node, EXPLICIT_MESSAGE);
        }
        break;

      case 'never':
        if (isFlowDirective) {
          context.report(node, NEVER_MESSAGE);
        }
        break;
      }
    },
  };
};

module.exports.schema = [{
  enum: ['always', 'explicit', 'never'],
}];
