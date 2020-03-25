module.exports = {
  // https://github.com/hudochenkov/stylelint-order/tree/master/rules/order
  // Force variables to be at the top
  'order/order': null,

  // https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-order
  // Order inspired by Concentric CSS http://rhodesmill.org/brandon/2011/concentric-css/
  // Group properties in this order:
  // 1. Weird properties
  // 2. Positioning
  // 3. Box model
  // 4. Everything else
  //
  // Positioning and box model properties are at the top because they help
  // easily draw a mental image of an element’s shape and form.
  //
  // No specific property order is enforced within those groups.
  'order/properties-order': [
    // Weird properties
    {
      order: 'flexible',
      properties: [
        'content',
        'quotes',
      ],
    },
    // Positioning
    {
      order: 'flexible',
      properties: [
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
      ],
    },
    // Box model
    {
      order: 'flexible',
      properties: [
        'box-sizing',
        'display',
        'overflow',
        'vertical-align',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'order',
        'align-self',
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',
        'grid',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-column-gap',
        'grid-row-gap',
        'columns',
        'column-gap',
        'column-fill',
        'column-rule',
        'column-span',
        'column-count',
        'column-width',
        'float',
        'clear',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-width',
        'border-top-width',
        'border-right-width',
        'border-bottom-width',
        'border-left-width',
        'border-style',
        'border-top-style',
        'border-right-style',
        'border-bottom-style',
        'border-left-style',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
      ],
    },
    // All other properties come after
  ],

  // https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-alphabetical-order
  'order/properties-alphabetical-order': null,
};
