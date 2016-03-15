module.exports = {
  // Handles destructuring arrays with flow type in function parameters
  'babel/array-bracket-spacing': [1, 'never'],
  // Handles async functions correctly
  'babel/arrow-parens': [1, 'always'],
  // Handles async/await functions correctly
  'babel/generator-star-spacing': [1, 'after'],
  // Ignores capitalized decorators (@Decorator)
  'babel/new-cap': [2, {newIsCap: true, capIsNew: false}],
  // guard against awaiting async functions inside of a loop
  'babel/no-await-in-loop': 0,
  // doesn't complain about export x from "mod"; or export * as x from "mod";
  'babel/object-curly-spacing': [1, 'never'],
  // doesn't fail when using object spread (...obj)
  'babel/object-shorthand': [1, 'always'],
};
