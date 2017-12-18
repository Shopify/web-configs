module.exports = {
  meta: {
    docs: {
      description: 'disallow the use of `debugger`',
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
