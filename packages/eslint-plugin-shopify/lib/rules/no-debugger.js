module.exports = {
  meta: {
    docs: {
      description: 'Disallow the use of `debugger`.',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [],
  },

  create(context) {
    return {
      DebuggerStatement(node) {
        context.report({
          node,
          message: "Unexpected 'debugger' statement.",
        });
      },
    };
  },
};
