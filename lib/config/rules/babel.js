// Make sure that any rules here that override default ESLint rules are
// also turned off in configs that include these rules.

module.exports = {
  // Doesn't complain about optional chaining
  'babel/camelcase': ['error', {properties: 'always'}],
  // Ignores capitalized decorators (@Decorator)
  'babel/new-cap': ['error', {newIsCap: true, capIsNew: false}],
  // Doesn't complain about export x from "mod"; or export * as x from "mod";
  'babel/object-curly-spacing': ['error', 'never'],
  // Doesn't fail when inside class properties
  'babel/no-invalid-this': 'error',
  // Doesn't fail when using do expressions or optional chaining
  'babel/no-unused-expressions': 'error',
  // Rule to flag missing semicolons
  'babel/semi': 'error',
  // Doesn't complain when used with BigInt
  'babel/valid-typeof': 'error',
};
