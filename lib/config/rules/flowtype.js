// see https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
  // Enforces a particular style for boolean type annotations.
  'flowtype/boolean-style': ['error', 'boolean'],
  // Marks Flow type identifiers as defined.
  'flowtype/define-flow-type': 'error',
  // Enforces consistent use of trailing commas in Object and Tuple annotations.
  'flowtype/delimiter-dangle': ['error', 'always-multiline'],
  // Enforces consistent spacing within generic type annotation parameters.
  'flowtype/generic-spacing': ['error', 'never'],
  // Checks for duplicate properties in Object annotations
  'flowtype/no-dupe-keys': 'error',
  // Disallows $FlowFixMe comment suppressions
  'flowtype/no-flow-fix-me-comments': 'off',
  // Disallows use of primitive constructors as types, such as Boolean, Number and String.
  'flowtype/no-primitive-constructor-types': 'error',
  // Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration (or a @noflow annotation).
  'flowtype/no-types-missing-file-annotation': 'error',
  // Warns against weak type annotations any, Object and Function.
  'flowtype/no-weak-types': [
    'error',
    {
      any: false,
      Object: false,
      Function: true,
    },
  ],
  // Enforces consistent separators between properties in Flow object types.
  'flowtype/object-type-delimiter': ['error', 'comma'],
  // Requires that all function parameters have type annotations.
  'flowtype/require-parameter-type': 'off',
  // Requires that functions have return type annotation.
  'flowtype/require-return-type': 'off',
  // Makes sure that files have a valid @flow annotation.
  'flowtype/require-valid-file-annotation': ['error', 'always'],
  // Requires that all variable declarators have type annotations.
  'flowtype/require-variable-type': 'off',
  // Enforces consistent use of semicolons after type aliases.
  'flowtype/semi': ['error', 'always'],
  // Enforces sorting of Object annotations
  'flowtype/sort-keys': 'off',
  // Enforces consistent spacing after the type annotation colon.
  'flowtype/space-after-type-colon': ['error', 'always'],
  // Enforces consistent spacing before the type annotation colon.
  'flowtype/space-before-type-colon': ['error', 'never'],
  // Enforces consistent spacing before the opening < of generic type annotation parameters.
  'flowtype/space-before-generic-bracket': ['error', 'never'],
  // Enforces a consistent naming pattern for type aliases.
  'flowtype/type-id-match': 'off',
  // Enforces consistent spacing around union and intersection type separators (| and &).
  'flowtype/union-intersection-spacing': 'error',
  // Marks Flow type alias declarations as used.
  'flowtype/use-flow-type': 'error',
  // Checks for simple Flow syntax errors.
  'flowtype/valid-syntax': 'error',
};
