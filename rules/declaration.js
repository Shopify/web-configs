module.exports = {
  // Disallow duplicate properties within declaration blocks.
  'declaration-block-no-duplicate-properties': [true, {
    ignore: 'consecutive-duplicates',
  }],
  // Disallow property values that are ignored due to another property value in the same rule.
  'declaration-block-no-ignored-properties': true,
  // Disallow longhand properties that can be combined into one shorthand property.
  'declaration-block-no-redundant-longhand-properties': true,
  // Disallow shorthand properties that override related longhand properties within declaration blocks.
  'declaration-block-no-shorthand-property-overrides': true,
  // Specify the order of properties within rules.
  'declaration-block-properties-order': [
    [
      {
        order: 'strict',
        properties: [
          'content',
        ],
      },
      {
        order: 'strict',
        properties: [
          'position',
          'z-index',
          'top',
          'bottom',
          'left',
          'right',
        ],
      },
      {
        order: 'strict',
        properties: [
          'transform',
          'transform-origin',
        ],
      },
      {
        order: 'strict',
        properties: [
          'box-sizing',
          'display',
          'overflow',
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
          'height',
          'width',
          'margin',
          'margin-top',
          'margin-bottom',
          'margin-left',
          'margin-right',
          'padding',
          'padding-top',
          'padding-bottom',
          'padding-left',
          'padding-right',
        ],
      },
      {
        order: 'strict',
        properties: [
          'background',
          'background-color',
          'background-size',
          'background-position',
          'background-repeat',
          'border',
          'border-top',
          'border-bottom',
          'border-left',
          'border-right',
          'outline',
          'box-shadow',
          'border-radius',
        ],
      },
      {
        order: 'strict',
        properties: [
          'font',
          'font-size',
          'font-weight',
          'font-style',
          'font-smoothing',
          'font-feature-settings',
          'line-height',
          'color',
          'text-align',
          'white-space',
          'vertical-align',
          'text-decoration',
        ],
      },
      {
        order: 'strict',
        properties: [
          'transition',
        ],
      },
    ],
    {
      unspecified: 'ignore',
    },
  ],
  // Require a newline or disallow whitespace after the semicolons of declaration blocks.
  'declaration-block-semicolon-newline-after': 'always-multi-line',
  // Require a newline or disallow whitespace before the semicolons of declaration blocks.
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  // Require a single space or disallow whitespace after the semicolons of declaration blocks.
  'declaration-block-semicolon-space-after': 'always-single-line',
  // Require a single space or disallow whitespace before the semicolons of declaration blocks.
  'declaration-block-semicolon-space-before': 'never',
  // Limit the number of declaration within single line declaration blocks.
  'declaration-block-single-line-max-declarations': 2,
  // Require or disallow a trailing semicolon within declaration blocks.
  'declaration-block-trailing-semicolon': 'always',
  // Require a single space or disallow whitespace after the bang of declarations.
  'declaration-bang-space-after': 'never',
  // Require a single space or disallow whitespace before the bang of declarations.
  'declaration-bang-space-before': 'always',
  // Require a newline or disallow whitespace after the colon of declarations.
  'declaration-colon-newline-after': 'always-multi-line',
  // Require a single space or disallow whitespace after the colon of declarations.
  'declaration-colon-space-after': 'always-single-line',
  // Require a single space or disallow whitespace before the colon of declarations.
  'declaration-colon-space-before': 'never',
  //  Require or disallow an empty line before declarations.
  'declaration-empty-line-before': ['never', {
    ignore: ['after-declaration', 'inside-single-line-block'],
  }],
  // Disallow !important within declarations.
  'declaration-no-important': true,
  // Specify a blacklist of disallowed property and unit pairs within declarations.
  'declaration-property-unit-blacklist': {},
  // Specify a whitelist of allowed property and unit pairs within declarations.
  'declaration-property-unit-whitelist': null,
  // Specify a blacklist of disallowed property and value pairs within declarations.
  'declaration-property-value-blacklist': {
    position: ['fixed'],
    '/^animation/': ['linear'],
  },
  // Specify a whitelist of allowed property and value pairs within declarations.
  'declaration-property-value-whitelist': {},
  // Disallow !important within keyframe declarations.
  'keyframe-declaration-no-important': true,
};
