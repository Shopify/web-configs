const {join, dirname, relative, basename} = require('path');

const resolve = require('eslint-module-utils/resolve').default;
const pkgDir = require('pkg-dir');

const REPO_URL = 'https://github.com/Shopify/web-configs';

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

function getImportDetailsForName(name, context, node) {
  const definition = findDefinition(name, context, node);
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
    source: normalizeSource(resolvedSource, context),
    local: name,
    imported,
  };
}

const INDEX_FILE = /^index\./;
const IS_FILE = /(^|\/).*\..*$/;

// Calling `normalizeSource` repeatedly with the same arguments is expensive as
// it traverses the file system upwards in search for a specific directory. By
// caching the normalized value we trade a little bit of additional memory with
// a 12% speedup in total linting times for bigger projects.
const normalizationCache = new Map();

function normalizeSource(source, context) {
  if (normalizationCache.has(source)) {
    return normalizationCache.get(source);
  }

  const sourceRoot = pkgDir.sync(source);
  const packageRoot = pkgDir.sync(context.getFilename());
  const relativeSource =
    sourceRoot === packageRoot
      ? relative(packageRoot, source)
      : relative(packageRoot, sourceRoot);
  const sourceBasename = basename(relativeSource);
  const sourceDir = IS_FILE.test(relativeSource)
    ? dirname(relativeSource)
    : relativeSource;

  const sourceWithoutExtension = INDEX_FILE.test(sourceBasename)
    ? sourceDir
    : join(sourceDir, sourceBasename.split('.').slice(0, -1).join('.'));

  const normalized = sourceWithoutExtension.replace(/^node_modules\//, '');
  normalizationCache.set(source, normalized);
  return normalized;
}

function findDefinition(name, context, node) {
  let definition = null;
  let currentScope = context.sourceCode.getScope(node);

  while (currentScope && !definition) {
    if (currentScope.set.has(name)) {
      const {defs} = currentScope.set.get(name);
      definition = defs[defs.length - 1];
    }

    currentScope = currentScope.upper;
  }

  return definition;
}

function polarisComponentFromJSX(node, context) {
  const openingElement = node.openingElement;
  const isMemberExpression = openingElement.name.type === 'JSXMemberExpression';
  const importDetails = isMemberExpression
    ? getImportDetailsForName(
        getRootObject(openingElement.name).name,
        context,
        node,
      )
    : getImportDetailsForName(openingElement.name.name, context, node);

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

function docsUrl(ruleName) {
  return `${REPO_URL}/blob/main/packages/eslint-plugin/docs/rules/${ruleName}.md`;
}

module.exports = {
  uncast,
  getName,
  getImportDetailsForName,
  polarisComponentFromJSX,
  getRootObject,
  docsUrl,
  DEFAULT_IMPORT,
  NAMESPACE_IMPORT,
};
