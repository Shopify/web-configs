// uses graphql-config for schema mapping
module.exports = {
  'graphql/capitalized-type-name': 'off',
  'graphql/named-operations': 'error',
  'graphql/no-deprecated-fields': 'error',
  'graphql/template-strings': ['error', {env: 'literal'}],
  'graphql/required-fields': 'off',
};
