module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        // Disallows awaiting a value that is not a Thenable
        '@typescript-eslint/await-thenable': 'error',
        // Disallow iterating over an array with a for-in loop
        '@typescript-eslint/no-for-in-array': 'error',
        // Avoid using promises in places not designed to handle them
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: true,
            checksConditionals: true,
          },
        ],
        // Warns if a type assertion does not change the type of an expression
        // Disabling here because in most cases the explicitness is still valuable
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        // Enforce includes method over indexOf method
        '@typescript-eslint/prefer-includes': 'error',
        // Prefer RegExp#exec() over String#match() if no global flag is provided
        '@typescript-eslint/prefer-regexp-exec': 'error',
        // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        // Disallow async functions which have no await expression
        '@typescript-eslint/require-await': 'error',
        // Enforces unbound methods are called with their expected scope
        '@typescript-eslint/unbound-method': ['error', {ignoreStatic: false}],
        // Warns when a namespace qualifier is unnecessary
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // When adding two variables, operands must both be of type number or of type string
        '@typescript-eslint/restrict-plus-operands': 'error',
        // Prevents conditionals where the type is always truthy or always falsy
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          {ignoreRhs: true},
        ],
        // Warns if an explicitly specified type argument is the default for that type parameter
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        // Requires that private members are marked as readonly if they're never modified outside of the constructor
        '@typescript-eslint/prefer-readonly': [
          'error',
          {onlyInlineLambdas: false},
        ],
      },
    },
  ],
};
