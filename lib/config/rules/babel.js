// Make sure that any rules here that override default ESLint rules are
// also turned off in configs that include these rules.

module.exports = {
  // Handles destructuring arrays with flow type in function parameters
  'babel/array-bracket-spacing': ['warn', 'never'],
  // Handles async functions correctly
  'babel/arrow-parens': ['warn', 'always'],
  // Require a particular separator between properties in Flow object types.
  'babel/flow-object-type': ['warn', 'comma'],
  // Require or forbid trailing commas for function paramater lists.
  'babel/func-params-comma-dangle': ['warn', 'always-multiline'],
  // Handles async/await functions correctly
  'babel/generator-star-spacing': ['warn', 'after'],
  // Ignores capitalized decorators (@Decorator)
  'babel/new-cap': ['error', {newIsCap: true, capIsNew: false}],
  // guard against awaiting async functions inside of a loop
  'babel/no-await-in-loop': 'off',
  // doesn't complain about export x from "mod"; or export * as x from "mod";
  'babel/object-curly-spacing': ['warn', 'never'],
  // doesn't fail when using object spread (...obj)
  'babel/object-shorthand': ['warn', 'always'],
};
