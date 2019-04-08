// See https://github.com/typescript-eslint/typescript-eslint

module.exports = {
  // Enforce one space after the colon and zero spaces before the colon of a type annotation.
  '@typescript-eslint/type-annotation-spacing': ['error'],
  // Require explicit return types on functions and class methods
  '@typescript-eslint/explicit-function-return-type': 'off',
  // Enforce accessibility modifiers on class properties and methods. (member-access from TSLint)
  '@typescript-eslint/explicit-member-accessibility': 'off',
  // Enforce interface names are prefixed. (interface-name from TSLint)
  '@typescript-eslint/interface-name-prefix': 'off',
  // Enforce naming conventions for class members by visibility.
  '@typescript-eslint/member-naming': 'off',
  // Enforce /// <reference /> is not used. (no-reference from TSLint)
  '@typescript-eslint/no-triple-slash-reference': 'error',
  // Disallow generic Array constructors
  '@typescript-eslint/no-array-constructor': 'error',
  // Enforce the use of as Type assertions instead of <Type> assertions. (no-angle-bracket-type-assertion from TSLint)
  '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
  // Enforce the any type is not used. (no-any from TSLint)
  '@typescript-eslint/no-explicit-any': 'off',
  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. (no-inferrable-types from TSLint)
  '@typescript-eslint/no-inferrable-types': ['error'],
  // Disallow the use of custom TypeScript modules and namespaces
  '@typescript-eslint/no-namespace': 'error',
  // Disallow non-null assertions using the ! postfix operator
  '@typescript-eslint/no-non-null-assertion': 'off',
  // Disallow the use of variables before they are defined.
  '@typescript-eslint/no-use-before-define': 'off',
  // Disallows the use of require statements except in import statements (no-var-requires from TSLint)
  '@typescript-eslint/no-var-requires': 'error',
  // Enforce the use of the keyword namespace over module to declare custom TypeScript modules. (no-internal-module from TSLint)
  '@typescript-eslint/prefer-namespace-keyword': 'off',
  // Disallow the use of type aliases. (interface-over-type-literal from TSLint)
  '@typescript-eslint/no-type-alias': 'off',
  // Enforce a standard member declaration order. (member-ordering from TSLint)
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'constructor',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
      ],
    },
  ],
  // Prevent TypeScript-specific constructs from being erroneously flagged as unused
  '@typescript-eslint/no-unused-vars': 'off',
  // Enforce member overloads to be consecutive.
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  // Disallow parameter properties in class constructors. (no-parameter-properties from TSLint)
  '@typescript-eslint/no-parameter-properties': 'off',
  // Enforce PascalCased class and interface names. (class-name from TSLint)
  '@typescript-eslint/class-name-casing': 'error',
  // Enforce a member delimiter style in interfaces and type literals.
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
      },
    },
  ],
  // Disallow the declaration of empty interfaces. (no-empty-interface from TSLint)
  '@typescript-eslint/no-empty-interface': 'off',
  // Requires using either T[] or Array<T> for arrays (array-type)
  '@typescript-eslint/array-type': ['error', 'array'],
  // Enforces that types will not to be used
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        String: {message: 'Use string instead', fixWith: 'string'},
        Boolean: {message: 'Use boolean instead', fixWith: 'boolean'},
        Number: {message: 'Use number instead', fixWith: 'number'},
        Object: {message: 'Use object instead', fixWith: 'object'},
        Array: {message: 'Provide a more specific type'},
      },
    },
  ],
  // Enforce camelCase naming convention
  '@typescript-eslint/camelcase': ['error', {properties: 'always'}],
  // Enforces naming of generic type variables
  '@typescript-eslint/generic-type-naming': 'off',
  // Enforce consistent indentation
  '@typescript-eslint/indent': 'off',
  // Forbids the use of classes as namespaces
  '@typescript-eslint/no-extraneous-class': 'error',
  // Disallow iterating over an array with a for-in loop
  '@typescript-eslint/no-for-in-array': 'error',
  // Enforce valid definition of new and constructor
  '@typescript-eslint/no-misused-new': 'error',
  // Forbids an object literal to appear in a type assertion expression
  '@typescript-eslint/no-object-literal-type-assertion': 'error',
  // Disallows invocation of require()
  '@typescript-eslint/no-require-imports': 'off',
  // Disallow aliasing this
  '@typescript-eslint/no-this-alias': ['error', {allowDestructuring: true}],
  // Warns when a namespace qualifier is unnecessary
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  // Warns if a type assertion does not change the type of an expression
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  // Disallow unnecessary constructors
  '@typescript-eslint/no-useless-constructor': 'off',
  // Use function types instead of interfaces with call signatures
  '@typescript-eslint/prefer-function-type': 'off',
  // Functions that return promises must be async
  '@typescript-eslint/promise-function-async': 'off',
  // When adding two variables, operands must both be of type number or of type string
  '@typescript-eslint/restrict-plus-operands': 'error',
};
