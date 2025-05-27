const globals = require('globals');
const promisePlugin = require('eslint-plugin-promise');
const sortClassMembersPlugin = require('eslint-plugin-sort-class-members');
const importPlugin = require('eslint-plugin-import-x');

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
      'import-x/ignore': ['node_modules', '\\.s?css'],
    },

    plugins: {
      promise: promisePlugin,
      'sort-class-members': sortClassMembersPlugin,
      'import-x': importPlugin,
    },

    rules: {
      // Require braces in arrow function body
      'arrow-body-style': 'off',
      // Verify super() callings in constructors
      'constructor-super': 'error',
      // Disallow modifying variables of class declarations
      'no-class-assign': 'error',
      // Disallow modifying variables that are declared using const
      'no-const-assign': 'error',
      // Disallow duplicate name in class members
      'no-dupe-class-members': 'error',
      // Disallow duplicate module imports (disabled, as import-x/no-duplicates does the same job but better)
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
      // Disallow generator functions that do not have yield
      'require-yield': 'error',
      // Sort import declarations within module
      'sort-imports': 'off',
      // Require symbol descriptions
      'symbol-description': 'error',

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
      'import-x/no-unresolved': 'error',
      // Ensure named imports correspond to a named export in the remote file.
      'import-x/named': 'error',
      // Ensure a default export is present, given a default import.
      'import-x/default': 'error',
      // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
      'import-x/namespace': 'error',
      // Forbid require() calls with expressions
      'import-x/no-dynamic-require': 'off',
      // Prevent importing the submodules of other modules
      'import-x/no-internal-modules': 'off',
      // Reports use of a default export as a locally named import.
      'import-x/no-named-default': 'error',
      // Restrict which files can be imported in a given folder
      'import-x/no-restricted-paths': 'off',
      // Forbid import of modules using absolute paths
      'import-x/no-absolute-path': 'error',
      // Forbid Webpack loader syntax in imports
      'import-x/no-webpack-loader-syntax': 'error',
      // Forbid a module from importing itself
      'import-x/no-self-import': 'error',
      // Forbid a module from importing a module with a dependency path back to itself
      'import-x/no-cycle': 'error',
      // Ensures that there are no useless path segments
      'import-x/no-useless-path-segments': 'error',
      // Forbid importing modules from parent directories
      'import-x/no-relative-parent-imports': 'off',
      // Ensures that modules contain exports and/or all modules are consumed within other modules
      'import-x/no-unused-modules': 'error',

      // Helpful warnings

      // Report any invalid exports, i.e. re-export of the same name
      'import-x/export': 'error',
      // Force exports to be declared at the bottom of the file
      'import-x/exports-last': 'off',
      // Report use of exported name as identifier of default export
      'import-x/no-named-as-default': 'error',
      // Report use of exported name as property of default export
      'import-x/no-named-as-default-member': 'error',
      // Report imported names marked with @deprecated documentation tag
      'import-x/no-deprecated': 'error',
      // Forbid the use of extraneous packages
      'import-x/no-extraneous-dependencies': 'error',
      // Forbid the use of mutable exports with var or let.
      'import-x/no-mutable-exports': 'error',

      // Module systems

      // Report potentially ambiguous parse goal (script vs. module)
      'import-x/unambiguous': 'off',
      // Report CommonJS require calls and module.exports or exports.*.
      'import-x/no-commonjs': 'off',
      // Report AMD require and define calls.
      'import-x/no-amd': 'off',
      // No Node.js builtin modules.
      'import-x/no-nodejs-modules': 'off',

      // Style guide

      // Enforce a leading comment with the webpackChunkName for dynamic imports
      'import-x/dynamic-import-chunkname': 'off',
      // Ensure all imports appear before other statements
      'import-x/first': 'error',
      // Report repeated import of the same module in multiple places
      'import-x/no-duplicates': 'error',
      // Report namespace imports
      'import-x/no-namespace': 'off',
      // Ensure consistent use of file extension within the import path
      'import-x/extensions': [
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
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          'newlines-between': 'always',
        },
      ],
      // Enforce a newline after import statements
      'import-x/newline-after-import': 'error',
      // Prefer a default export if module exports a single name
      'import-x/prefer-default-export': 'off',
      // Limit the maximum number of dependencies a module can have
      'import-x/max-dependencies': 'off',
      // Forbid unassigned imports
      'import-x/no-unassigned-import': 'off',
      // Forbid anonymous values as default exports
      'import-x/no-anonymous-default-export': 'error',
      // Prohibit default exports. Mostly an inverse of prefer-default-export.
      'import-x/no-default-export': 'off',
      // Forbid named exports
      'import-x/no-named-export': 'off',
      // Reports when named exports are not grouped together in a single export declaration or when multiple assignments to CommonJS module.exports or exports object are present in a single file.
      'import-x/group-exports': 'off',

      //
      // Remainders
      //

      // default params
      'no-param-reassign': 'error',
    },
  },
];
