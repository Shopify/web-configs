const {hasProp, getProp, getPropValue} = require('jsx-ast-utils');

const autoCompleteInputTypes = [
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'range',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

module.exports = {
  meta: {
    docs: {
      description: 'Require autocomplete attribute on certain input types.',
      category: 'Best Practices',
      recommended: true,
    },
    schema: {
      inputComponents: {
        type: 'array',
        items: {
          type: 'string',
        },
        uniqueItems: true,
      },
    },
  },
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const inputComponents =
        (context.options[0] && context.options[0].inputComponents) || [];
      const nodeName = node.name.name;

      const autoCompleteElements = ['input', ...inputComponents];

      if (!autoCompleteElements.includes(nodeName)) {
        return;
      }

      // input elements without a type attribute are treated as text
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types
      const inputType =
        getPropValue(getProp(node.attributes, 'type')) || 'text';

      if (!autoCompleteInputTypes.includes(inputType)) {
        return;
      }

      const hasAutoCompleteProp = hasProp(node.attributes, 'autoComplete');

      if (hasAutoCompleteProp) {
        return;
      }

      context.report(
        node,
        `'${nodeName}' elements of type '${inputType}' must have an autoComplete attribute`,
      );
    },
  }),
};
