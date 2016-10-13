// see https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
  // Enforces a particular style for boolean type annotations.
  'flowtype/boolean-style': ['warn', 'boolean'],
  // Marks Flow type identifiers as defined.
  'flowtype/define-flow-type': 'error',
  // Enforces consistent use of trailing commas in Object and Tuple annotations.
  'flowtype/delimiter-dangle': ['warn', 'always-multiline'],
  // Enforces consistent spacing within generic type annotation parameters.
  'flowtype/generic-spacing': ['warn', 'never'],
  // Checks for duplicate properties in Object annotations
  'flowtype/no-dupe-keys': 'error',
  // Warns against weak type annotations any, Object and Function.
  'flowtype/no-weak-types': ['error', {
    any: false,
    Object: false,
    Function: true,
  }],
  // Requires that all function parameters have type annotations.
  'flowtype/require-parameter-type': 'off',
  // Requires that functions have return type annotation.
  'flowtype/require-return-type': 'off',
  // Makes sure that files have a valid @flow annotation.
  'flowtype/require-valid-file-annotation': ['warn', 'always'],
  // Enforces consistent use of semicolons after type aliases.
  'flowtype/semi': ['warn', 'always'],
  // Enforces sorting of Object annotations
  'flowtype/sort-keys': 'off',
  // Enforces consistent spacing after the type annotation colon.
  'flowtype/space-after-type-colon': ['warn', 'always'],
  // Enforces consistent spacing before the type annotation colon.
  'flowtype/space-before-type-colon': ['warn', 'never'],
  // Enforces consistent spacing before the opening < of generic type annotation parameters.
  'flowtype/space-before-generic-bracket': ['warn', 'never'],
  // Enforces a consistent naming pattern for type aliases.
  'flowtype/type-id-match': ['warn', '^([A-Z][a-z0-9]*)*(Type|Props|State|Context)$'],
  // Enforces consistent spacing around union and intersection type separators (| and &).
  'flowtype/union-intersection-spacing': 'warn',
  // Marks Flow type alias declarations as used.
  'flowtype/use-flow-type': 'error',
  // Checks for simple Flow syntax errors.
  'flowtype/valid-syntax': 'error',
};
