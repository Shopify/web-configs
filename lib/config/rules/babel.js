// Make sure that any rules here that override default ESLint rules are
// also turned off in configs that include these rules.

module.exports = {
  // Ignores capitalized decorators (@Decorator)
  'babel/new-cap': ['error', {newIsCap: true, capIsNew: false}],
  // doesn't complain about export x from "mod"; or export * as x from "mod";
  'babel/object-curly-spacing': ['error', 'never'],
  // doesn't fail when inside class properties
  'babel/no-invalid-this': 'error',
  // Rule to flag missing semicolons
  'babel/semi': 'error',
};
