const globals = require('globals');
const promisePlugin = require('eslint-plugin-promise');
const sortClassMembersPlugin = require('eslint-plugin-sort-class-members');
const importPlugin = require('eslint-plugin-import');

const shopifyCoreConfig = require('./core');

module.exports = [
  ...shopifyCoreConfig,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.es2021,
      },
    },

    settings: {
      'import/ignore': ['node_modules', '\\.s?css'],
    },

    plugins: {
      promise: promisePlugin,
      'sort-class-members': sortClassMembersPlugin,
      import: importPlugin,
    },

    rules: {
      // Require braces in arrow function body
      'arrow-body-style': 'off',
      // Require parens in arrow function arguments
      'arrow-parens': ['error', 'always'],
      // Require space before/after arrow function's arrow
      'arrow-spacing': ['error', {before: true, after: true}],
      // Verify super() callings in constructors
      'constructor-super': 'error',
      // Enforce the spacing around the * in generator functions
      'generator-star-spacing': ['error', 'after'],
      // Disallow modifying variables of class declarations
      'no-class-assign': 'error',
      // Disallow arrow functions where they could be confused with comparisons
      'no-confusing-arrow': ['error', {allowParens: true}],
      // Disallow modifying variables that are declared using const
      'no-const-assign': 'error',
      // Disallow duplicate name in class members
      'no-dupe-class-members': 'error',
      // Disallow duplicate module imports (disabled, as import/no-duplicates does the same job but better)
      'no-duplicate-imports': 'off',
      // Disallow use of the new operator with the Symbol object
      'no-new-symbol': 'error',
      // Disallow to use this/super before super() calling in constructors.
      'no-this-before-super': 'error',
      // Disallow unnecessary computed property keys in object literals
      'no-useless-computed-key': 'off',
      // Disallow unnecessary constructor
      'no-useless-constructor': 'error',
      // Disallow renaming import, export, and destructured assignments to the same name
      'no-useless-rename': 'error',
      // Require let or const instead of var
      'no-var': 'error',
      // Require method and property shorthand syntax for object literals
      'object-shorthand': ['error', 'always', {avoidQuotes: true}],
      // Suggest using arrow functions as callbacks
      'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
      // Suggest using of const declaration for variables that are never modified after declared
      'prefer-const': 'error',
      // Require destructuring from arrays and/or objects
      'prefer-destructuring': 'off',
      // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
      'prefer-numeric-literals': 'error',
      // Suggest using the rest parameters instead of arguments
      'prefer-rest-params': 'error',
      // Suggest using the spread operator instead of .apply()
      'prefer-spread': 'error',
      // Suggest using Reflect methods where applicable
      'prefer-reflect': 'off',
      // Suggest using template literals instead of strings concatenation
      'prefer-template': 'error',
      // Enforce spacing between rest and spread operators and their expressions
      'rest-spread-spacing': ['error', 'never'],
      // Disallow generator functions that do not have yield
      'require-yield': 'error',
      // Sort import declarations within module
      'sort-imports': 'off',
      // Require symbol descriptions
      'symbol-description': 'error',
      // Enforce spacing around embedded expressions of template strings
      'template-curly-spacing': ['error', 'never'],
      // Enforce spacing around the * in yield* expressions
      'yield-star-spacing': ['error', {before: false, after: true}],

      //
      // promise
      //

      'promise/always-catch': 'off',
      // Ensure that each time a then() is applied to a promise, a catch() is applied as well. Exceptions are made if you are returning that promise.
      'promise/catch-or-return': 'error',
      // Avoid wrapping values in Promise.resolve or Promise.reject when not needed
      'promise/no-return-wrap': 'error',
      // Ensure that inside a then() you make sure to return a new promise or value.
      'promise/always-return': 'off',
      // Enforce standard parameter names for Promise constructors.
      'promise/param-names': 'error',
      // Ensure that Promise is included fresh in each file instead of relying on the existence of a native promise implementation.
      'promise/no-native': 'off',
      // Avoid nested .then() or .catch() statements
      'promise/no-nesting': 'error',
      // Avoid using promises inside of callbacks
      'promise/no-promise-in-callback': 'off',
      // Avoid calling cb() inside of a then() (use nodeify instead)
      'promise/no-callback-in-promise': 'off',
      // Avoid creating new promises outside of utility libs (use pify instead)
      'promise/avoid-new': 'off',
      // Ensures the proper number of arguments are passed to Promise functions
      'promise/valid-params': 'error',
      // Avoid calling new on a Promise static method
      'promise/no-new-statics': 'off',
      // Disallow return statements in finally()
      'promise/no-return-in-finally': 'error',

      // Async/Await Rules

      // Prefer await to then() for reading Promise values
      'promise/prefer-await-to-then': 'off',
      // Prefer async/await to the callback pattern
      'promise/prefer-await-to-callbacks': 'off',

      //
      // sort-class-members
      //

      'sort-class-members/sort-class-members': [
        'error',
        {
          order: [
            '[static-members]',
            '[properties]',
            '[conventional-private-properties]',
            'constructor',
            '[methods]',
            '[conventional-private-methods]',
            '[everything-else]',
          ],
          groups: {
            'static-members': [{static: true}],
          },
          accessorPairPositioning: 'getThenSet',
        },
      ],

      //
      // import
      //

      // Static analysis

      // Ensure imports point to a file/module that can be resolved.
      'import/no-unresolved': 'error',
      // Ensure named imports correspond to a named export in the remote file.
      'import/named': 'error',
      // Ensure a default export is present, given a default import.
      'import/default': 'error',
      // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
      'import/namespace': 'error',
      // Forbid require() calls with expressions
      'import/no-dynamic-require': 'off',
      // Prevent importing the submodules of other modules
      'import/no-internal-modules': 'off',
      // Reports use of a default export as a locally named import.
      'import/no-named-default': 'error',
      // Restrict which files can be imported in a given folder
      'import/no-restricted-paths': 'off',
      // Forbid import of modules using absolute paths
      'import/no-absolute-path': 'error',
      // Forbid Webpack loader syntax in imports
      'import/no-webpack-loader-syntax': 'error',
      // Forbid a module from importing itself
      'import/no-self-import': 'error',
      // Forbid a module from importing a module with a dependency path back to itself
      'import/no-cycle': 'error',
      // Ensures that there are no useless path segments
      'import/no-useless-path-segments': 'error',
      // Forbid importing modules from parent directories
      'import/no-relative-parent-imports': 'off',
      // Ensures that modules contain exports and/or all modules are consumed within other modules
      'import/no-unused-modules': 'error',

      // Helpful warnings

      // Report any invalid exports, i.e. re-export of the same name
      'import/export': 'error',
      // Force exports to be declared at the bottom of the file
      'import/exports-last': 'off',
      // Report use of exported name as identifier of default export
      'import/no-named-as-default': 'error',
      // Report use of exported name as property of default export
      'import/no-named-as-default-member': 'error',
      // Report imported names marked with @deprecated documentation tag
      'import/no-deprecated': 'error',
      // Forbid the use of extraneous packages
      'import/no-extraneous-dependencies': 'error',
      // Forbid the use of mutable exports with var or let.
      'import/no-mutable-exports': 'error',

      // Module systems

      // Report potentially ambiguous parse goal (script vs. module)
      'import/unambiguous': 'off',
      // Report CommonJS require calls and module.exports or exports.*.
      'import/no-commonjs': 'off',
      // Report AMD require and define calls.
      'import/no-amd': 'off',
      // No Node.js builtin modules.
      'import/no-nodejs-modules': 'off',

      // Style guide

      // Enforce a leading comment with the webpackChunkName for dynamic imports
      'import/dynamic-import-chunkname': 'off',
      // Ensure all imports appear before other statements
      'import/first': 'error',
      // Report repeated import of the same module in multiple places
      'import/no-duplicates': 'error',
      // Report namespace imports
      'import/no-namespace': 'off',
      // Ensure consistent use of file extension within the import path
      'import/extensions': [
        'error',
        {
          js: 'never',
          json: 'always',
          svg: 'always',
          png: 'always',
          jpg: 'always',
          ico: 'always',
          graphql: 'always',
          css: 'always',
          sass: 'always',
          scss: 'always',
          less: 'always',
          styl: 'always',
        },
      ],
      // Enforce a convention in module import order
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          'newlines-between': 'always',
        },
      ],
      // Enforce a newline after import statements
      'import/newline-after-import': 'error',
      // Prefer a default export if module exports a single name
      'import/prefer-default-export': 'off',
      // Limit the maximum number of dependencies a module can have
      'import/max-dependencies': 'off',
      // Forbid unassigned imports
      'import/no-unassigned-import': 'off',
      // Forbid anonymous values as default exports
      'import/no-anonymous-default-export': 'error',
      // Prohibit default exports. Mostly an inverse of prefer-default-export.
      'import/no-default-export': 'off',
      // Forbid named exports
      'import/no-named-export': 'off',
      // Reports when named exports are not grouped together in a single export declaration or when multiple assignments to CommonJS module.exports or exports object are present in a single file.
      'import/group-exports': 'off',

      //
      // Remainders
      //

      // default params
      'no-param-reassign': 'error',
      // Rules override by the Babel plugin
      camelcase: 'off',
      quotes: 'off',
      'no-unused-expressions': 'off',
      'valid-typeof': 'off',
      'new-cap': 'off',
      'no-await-in-loop': 'off',
      'object-curly-spacing': 'off',
      'no-invalid-this': 'off',
    },
  },
];
