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
  // Disallow generic Array constructors
  '@typescript-eslint/no-array-constructor': 'error',
  // Enforce the any type is not used. (no-any from TSLint)
  '@typescript-eslint/no-explicit-any': 'off',
  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. (no-inferrable-types from TSLint)
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: false,
      ignoreProperties: false,
    },
  ],
  // Disallow the use of custom TypeScript modules and namespaces
  '@typescript-eslint/no-namespace': [
    'error',
    {allowDeclarations: false, allowDefinitionFiles: false},
  ],
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
  '@typescript-eslint/class-name-casing': [
    'error',
    {allowUnderscorePrefix: false},
  ],
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
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'array-simple',
      readonly: 'generic',
    },
  ],
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
  '@typescript-eslint/no-extraneous-class': [
    'error',
    {allowConstructorOnly: false, allowEmpty: false, allowStaticOnly: false},
  ],
  // Enforce valid definition of new and constructor
  '@typescript-eslint/no-misused-new': 'error',
  // Disallows invocation of require()
  '@typescript-eslint/no-require-imports': 'off',
  // Disallow aliasing this
  '@typescript-eslint/no-this-alias': [
    'error',
    {allowDestructuring: true, allowedNames: []},
  ],
  // Disallow unnecessary constructors
  '@typescript-eslint/no-useless-constructor': 'off',
  // Use function types instead of interfaces with call signatures
  '@typescript-eslint/prefer-function-type': 'off',
  // Functions that return promises must be async
  '@typescript-eslint/promise-function-async': 'off',
  // Bans “// @ts-ignore” comments from being used
  '@typescript-eslint/ban-ts-ignore': 'error',
  // Enforce consistent brace style for blocks
  '@typescript-eslint/brace-style': 'error',
  // Enforces consistent usage of type assertions.
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {assertionStyle: 'as', objectLiteralTypeAssertions: 'allow'},
  ],
  // Consistent with type definition either interface or type
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  // Require or disallow spacing between function identifiers and their invocations
  '@typescript-eslint/func-call-spacing': 'error',
  // Disallow empty functions
  '@typescript-eslint/no-empty-function': 'off',
  // Disallow unnecessary parentheses
  '@typescript-eslint/no-extra-parens': 'error',
  // Requires Promise-like values to be handled appropriately.
  '@typescript-eslint/no-floating-promises': 'off',
  // Disallows magic numbers
  '@typescript-eslint/no-magic-numbers': 'off',
  // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
  '@typescript-eslint/prefer-for-of': 'error',
  // Enforce the consistent use of either backticks, double, or single quotes
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {avoidEscape: true, allowTemplateLiterals: true},
  ],
  // Enforce giving compare argument to Array#sort
  '@typescript-eslint/require-array-sort-compare': 'off',
  // Require or disallow semicolons instead of ASI
  '@typescript-eslint/semi': 'error',
  // Restricts the types allowed in boolean expressions
  '@typescript-eslint/strict-boolean-expressions': 'off',
  // Sets preference level for triple slash directives versus ES6-style import declarations
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {path: 'never', types: 'never', lib: 'never'},
  ],
  // Requires type annotations to exist
  '@typescript-eslint/typedef': 'off',
  // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
  '@typescript-eslint/unified-signatures': 'error',

  // The rules below require type information and are slower to run.
  // We disable them here to keep this config lightweight, but enable
  // them in the `typescript/requiring-type-checking` config.

  // Disallows awaiting a value that is not a Thenable
  '@typescript-eslint/await-thenable': 'off',
  // Disallow iterating over an array with a for-in loop
  '@typescript-eslint/no-for-in-array': 'off',
  // Avoid using promises in places not designed to handle them
  '@typescript-eslint/no-misused-promises': 'off',
  // Warns if a type assertion does not change the type of an expression
  '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  // Enforce includes method over indexOf method
  '@typescript-eslint/prefer-includes': 'off',
  // Prefer RegExp#exec() over String#match() if no global flag is provided
  '@typescript-eslint/prefer-regexp-exec': 'off',
  // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
  '@typescript-eslint/prefer-string-starts-ends-with': 'off',
  // Disallow async functions which have no await expression
  '@typescript-eslint/require-await': 'off',
  // Enforces unbound methods are called with their expected scope
  '@typescript-eslint/unbound-method': 'off',
  // Warns when a namespace qualifier is unnecessary
  '@typescript-eslint/no-unnecessary-qualifier': 'off',
  // When adding two variables, operands must both be of type number or of type string
  '@typescript-eslint/restrict-plus-operands': 'off',
  // Prevents conditionals where the type is always truthy or always falsy
  '@typescript-eslint/no-unnecessary-condition': 'off',
  // Warns if an explicitly specified type argument is the default for that type parameter
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  // Requires that private members are marked as readonly if they're never modified outside of the constructor
  '@typescript-eslint/prefer-readonly': 'off',
};
