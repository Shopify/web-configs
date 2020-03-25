// uses graphql-config for schema mapping
module.exports = {
  'graphql/capitalized-type-name': 'off',
  'graphql/named-operations': ['error', {env: 'literal'}],
  'graphql/no-deprecated-fields': ['error', {env: 'literal'}],
  'graphql/template-strings': ['error', {env: 'literal'}],
  'graphql/required-fields': 'off',
};
