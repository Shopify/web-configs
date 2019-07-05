const TEST_FUNCTION_NAMES = [
  'it',
  'xit',
  'fit',
  'test',
  'xtest',
  'describe',
  'fdescribe',
  'xdescribe',
];

const TEST_DEFINITION_NAMES = ['it', 'xit', 'fit', 'test', 'xtest'];

function getTestMethodName({callee}) {
  switch (callee.type) {
    case 'CallExpression':
      return callee.callee.object
        ? callee.callee.object.name
        : callee.callee.name;
    case 'Identifier':
      return callee.name;
    case 'MemberExpression':
      return callee.object.name;
    default:
      return false;
  }
}

function isTestDefinition(node) {
  return (
    node.type === 'CallExpression' &&
    TEST_DEFINITION_NAMES.includes(getTestMethodName(node))
  );
}

function isTestArrowFunction(node) {
  return (
    node.type === 'ArrowFunctionExpression' &&
    node.parent.type === 'CallExpression' &&
    TEST_DEFINITION_NAMES.includes(getTestMethodName(node.parent))
  );
}

module.exports = {
  TEST_FUNCTION_NAMES,
  getTestMethodName,
  isTestDefinition,
  isTestArrowFunction,
};
