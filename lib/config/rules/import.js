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

  // Helpful warnings

  // Report any invalid exports, i.e. re-export of the same name
  'import/export': 'error',
  // Report use of exported name as identifier of default export
  'import/no-named-as-default': 'warn',
  // Report use of exported name as property of default export
  'import/no-named-as-default-member': 'warn',
  // Report imported names marked with @deprecated documentation tag
  'import/no-deprecated': 'warn',

  // Module systems

  // Report CommonJS require calls and module.exports or exports.*.
  'import/no-commonjs': 'off',
  // Report AMD require and define calls.
  'import/no-amd': 'off',

  // Style guide

  // Ensure all imports appear before other statements
  'import/imports-first': 'warn',
  // Report repeated import of the same module in multiple places
  'import/no-duplicates': 'error',
  // Report namespace imports
  'import/no-namespace': 'off',
};
