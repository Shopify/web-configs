const {join, dirname, relative, basename} = require('path');
const resolve = require('eslint-module-utils/resolve').default;
const pkgDir = require('pkg-dir');

function uncast(node) {
  let currentNode = node;

  while (
    currentNode.type === 'TypeCastExpression' ||
    currentNode.type === 'TSAsExpression'
  ) {
    currentNode = currentNode.expression;
  }

  return currentNode;
}

function getName(node) {
  const finalNode = uncast(node);
  const type = finalNode.type;

  if (type === 'Identifier') {
    return finalNode.name;
  } else if (type === 'Literal') {
    return String(finalNode.value);
  } else if (type === 'TemplateLiteral' && finalNode.expressions.length === 0) {
    return finalNode.quasis[0].value.raw;
  }
  return null;
}

const DEFAULT_IMPORT = Symbol('default');
const NAMESPACE_IMPORT = Symbol('namespace');

function getImportDetailsForName(name, context) {
  const definition = findDefinition(name, context);
  if (definition == null || definition.type !== 'ImportBinding') {
    return null;
  }

  const source = definition.parent.source.value;
  const resolvedSource = resolve(source, context);
  if (resolvedSource == null) {
    return null;
  }

  const definitionNode = definition.node;
  let imported;

  if (definitionNode.type === 'ImportDefaultSpecifier') {
    imported = DEFAULT_IMPORT;
  } else if (definitionNode.type === 'ImportNamespaceSpecifier') {
    imported = NAMESPACE_IMPORT;
  } else {
    const importedName = definitionNode.imported.name;
    imported = importedName === 'default' ? DEFAULT_IMPORT : importedName;
  }

  return {
    source: normalizeSource(resolvedSource),
    local: name,
    imported,
  };
}

const INDEX_FILE = /^index\./;
function normalizeSource(source) {
  const root = pkgDir.sync(source);
  const relativeSource = relative(root, source);
  const sourceBasename = basename(relativeSource);
  const sourceDir = dirname(relativeSource);

  const sourceWithoutExtension = INDEX_FILE.test(sourceBasename)
    ? sourceDir
    : join(
        sourceDir,
        sourceBasename
          .split('.')
          .slice(0, -1)
          .join('.'),
      );

  return sourceWithoutExtension.replace(/^node_modules\//, '');
}

function findDefinition(name, context) {
  let definition = null;
  let currentScope = context.getScope();

  while (currentScope && !definition) {
    if (currentScope.set.has(name)) {
      const {defs} = currentScope.set.get(name);
      definition = defs[defs.length - 1];
    }

    currentScope = currentScope.upper;
  }

  return definition;
}

function polarisComponentFromJSX({openingElement}, context) {
  const isMemberExpression = openingElement.name.type === 'JSXMemberExpression';
  const importDetails = isMemberExpression
    ? getImportDetailsForName(getRootObject(openingElement.name).name, context)
    : getImportDetailsForName(openingElement.name.name, context);

  if (importDetails == null || importDetails.source !== '@shopify/polaris') {
    return false;
  }

  const sourceCode = context.getSourceCode();
  const name = sourceCode.getText(openingElement.name);

  return isMemberExpression &&
    (importDetails.imported === NAMESPACE_IMPORT ||
      importDetails.imported === DEFAULT_IMPORT)
    ? name.replace(
        `${sourceCode.getText(getRootObject(openingElement.name))}.`,
        '',
      )
    : name;
}

function getRootObject(memberExpression) {
  let currentObject = memberExpression;

  while (currentObject.object) {
    currentObject = currentObject.object;
  }

  return currentObject;
}

module.exports = {
  uncast,
  getName,
  getImportDetailsForName,
  polarisComponentFromJSX,
  getRootObject,
  DEFAULT_IMPORT,
  NAMESPACE_IMPORT,
};
