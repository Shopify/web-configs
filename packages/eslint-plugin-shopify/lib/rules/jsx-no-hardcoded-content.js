const {
  getImportDetailsForName,
  DEFAULT_IMPORT,
  NAMESPACE_IMPORT,
  docsUrl,
} = require('../utilities');

const defaultDOMOptions = {
  '*': {checkProps: ['title', 'aria-label']},
  area: {checkProps: ['title', 'alt', 'aria-label']},
  img: {checkProps: ['title', 'alt', 'aria-label']},
  input: {checkProps: ['title', 'alt', 'placeholder', 'aria-label']},
};

module.exports = {
  meta: {
    docs: {
      description: 'Disallow hardcoded content in JSX.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('jsx-no-hardcoded-content'),
    },
    schema: [
      {
        type: 'object',
        properties: {
          allowStrings: {
            type: 'boolean',
          },
          allowNumbers: {
            type: 'boolean',
          },
          checkProps: {
            type: 'array',
            items: {type: 'string'},
          },
          dom: {
            type: 'object',
            additionalProperties: {
              type: 'object',
              properties: {
                allowNumbers: {
                  type: 'boolean',
                },
                allowStrings: {
                  type: 'boolean',
                },
                checkProps: {
                  items: {
                    type: 'string',
                  },
                  type: 'array',
                },
              },
            },
          },
          modules: {
            type: 'object',
            additionalProperties: {
              type: 'object',
              additionalProperties: {
                type: 'object',
                properties: {
                  allowNumbers: {
                    type: 'boolean',
                  },
                  allowStrings: {
                    type: 'boolean',
                  },
                  checkProps: {
                    items: {
                      type: 'string',
                    },
                    type: 'array',
                  },
                },
              },
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const defaultOptions = context.options[0] || {};
    const modules = defaultOptions.modules || {};
    const dom = defaultOptions.dom || {};
    const optionsForAllDOM = dom['*'] || defaultDOMOptions['*'];

    // eslint-disable-next-line prefer-object-spread
    const defaultOptionsForUnspecifiedDOMElement = Object.assign(
      {},
      defaultOptions,
      optionsForAllDOM,
    );

    function optionsForNode(node) {
      if (isDOMElement(node)) {
        const {name} = node.openingElement.name;

        return (
          dom[node.openingElement.name.name] ||
          defaultDOMOptions[name] ||
          defaultOptionsForUnspecifiedDOMElement
        );
      }

      const importDetails = getImportDetailsForJSX(node, context);

      if (importDetails == null) {
        return defaultOptions;
      }

      const foundModule = modules[importDetails.source];
      if (foundModule == null) {
        return defaultOptions;
      }

      return foundModule[importDetails.name] || defaultOptions;
    }

    return {
      JSXElement(node) {
        const check = checkContent(node, optionsForNode(node));

        if (check.valid) {
          return;
        }

        const elementName = context
          .getSourceCode()
          .getText(node.openingElement.name);

        if (check.prop === 'children') {
          context.report(
            node,
            `Do not use hardcoded content as the children of the ${elementName} component.`,
          );
        } else if (check.prop) {
          context.report(
            node,
            `Do not use hardcoded content in the ${check.prop} prop of the ${elementName} component.`,
          );
        }
      },
    };
  },
};

function getImportDetailsForJSX({openingElement}, context) {
  const isMemberExpression = openingElement.name.type === 'JSXMemberExpression';
  const searchForName = isMemberExpression
    ? openingElement.name.object.name
    : openingElement.name.name;

  const importDetails = getImportDetailsForName(searchForName, context);

  if (importDetails == null) {
    return null;
  }

  const {source, imported} = importDetails;
  let normalizedImport;

  if (isMemberExpression) {
    const memberName = openingElement.name.property.name;

    if (imported === DEFAULT_IMPORT) {
      normalizedImport = `default.${memberName}`;
    } else if (imported === NAMESPACE_IMPORT) {
      normalizedImport = memberName;
    } else {
      normalizedImport = `${imported}.${memberName}`;
    }
  } else {
    normalizedImport = imported === DEFAULT_IMPORT ? 'default' : imported;
  }

  return {
    source,
    name: normalizedImport,
  };
}

function isEmptyString(string) {
  return string.trim().length === 0;
}

function isDOMElement({openingElement: {name}}) {
  return name.type === 'JSXIdentifier' && name.name === name.name.toLowerCase();
}

function checkContent(
  node,
  {allowStrings = false, allowNumbers = true, checkProps = []},
) {
  function isInvalidContent(contentNode) {
    return (
      (contentNode.type === 'Literal' &&
        ((!allowStrings &&
          typeof contentNode.value === 'string' &&
          !isEmptyString(contentNode.value)) ||
          (!allowNumbers && typeof contentNode.value === 'number'))) ||
      (contentNode.type === 'TemplateLiteral' && !allowStrings) ||
      (contentNode.type === 'JSXExpressionContainer' &&
        isInvalidContent(contentNode.expression))
    );
  }

  function isInvalidProp(propNode) {
    return (
      propNode.type === 'JSXAttribute' &&
      checkProps.some((prop) => prop === propNode.name.name) &&
      isInvalidContent(
        propNode.value == null
          ? {type: 'Literal', value: true}
          : propNode.value,
      )
    );
  }

  if (node.children.some(isInvalidContent)) {
    return {valid: false, prop: 'children'};
  }

  const invalidProp =
    node.openingElement.attributes &&
    node.openingElement.attributes.find(isInvalidProp);
  return invalidProp
    ? {valid: false, prop: invalidProp.name.name}
    : {valid: true};
}
