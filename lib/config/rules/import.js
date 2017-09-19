// see https://github.com/benmosher/eslint-plugin-import

module.exports = {
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
  'import/no-named-default': 'warn',
  // Restrict which files can be imported in a given folder
  'import/no-restricted-paths': 'off',
  // Forbid import of modules using absolute paths
  'import/no-absolute-path': 'error',
  // Forbid Webpack loader syntax in imports
  'import/no-webpack-loader-syntax': 'error',

  // Helpful warnings

  // Report any invalid exports, i.e. re-export of the same name
  'import/export': 'error',
  // Report use of exported name as identifier of default export
  'import/no-named-as-default': 'warn',
  // Report use of exported name as property of default export
  'import/no-named-as-default-member': 'warn',
  // Report imported names marked with @deprecated documentation tag
  'import/no-deprecated': 'warn',
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

  // Ensure all imports appear before other statements
  'import/first': 'warn',
  // Report repeated import of the same module in multiple places
  'import/no-duplicates': 'error',
  // Report namespace imports
  'import/no-namespace': 'off',
  // Ensure consistent use of file extension within the import path
  'import/extensions': ['warn', {js: 'never', json: 'always'}],
  // Enforce a convention in module import order
  'import/order': ['warn', {
    groups: [
      ['builtin', 'external'],
      ['internal', 'parent', 'sibling'],
    ],
  }],
  // Enforce a newline after import statements
  'import/newline-after-import': 'warn',
  // Prefer a default export if module exports a single name
  'import/prefer-default-export': 'off',
  // Limit the maximum number of dependencies a module can have
  'import/max-dependencies': 'off',
  // Forbid unassigned imports
  'import/no-unassigned-import': 'off',
  // Forbid anonymous values as default exports
  'import/no-anonymous-default-export': 'error',
};
