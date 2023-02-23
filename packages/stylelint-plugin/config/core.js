module.exports = {
  //
  // At-Rules
  //

  // Specify a disallowed-list of disallowed at-rules.
  'at-rule-disallowed-list': ['debug'],
  // Require or disallow an empty line before @rules.
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['first-nested', 'blockless-after-same-name-blockless'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    },
  ],
  // Disallow unknown at-rules.
  'at-rule-no-unknown': true,
  // Disallow vendor prefixes for @rules.
  'at-rule-no-vendor-prefix': true,
  // Specify a allowed-list of allowed at-rules.
  'at-rule-allowed-list': null,

  //
  // Block
  //

  // Disallow empty blocks.
  'block-no-empty': true,

  //
  // Color
  //

  // Specify short or long notation for hex colors.
  'color-hex-length': 'long',
  // Require (where possible) or disallow named colors.
  'color-named': null,
  // Disallow hex colors.
  'color-no-hex': true,
  // Disallow invalid hex colors.
  'color-no-invalid-hex': true,

  //
  // Comment
  //

  // Require or disallow an empty line before comments.
  'comment-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    },
  ],
  // Disallow empty comments.
  'comment-no-empty': true,
  // Require a single space or disallow whitespace on the inside of comment markers.
  'comment-whitespace-inside': 'always',
  // Specify a disallowed list of disallowed words within comments.
  'comment-word-disallowed-list': null,
  // Disallow double-slash comments (//...) which are not supported by CSS.
  'no-invalid-double-slash-comments': true,

  //
  // Declaration
  //

  // Disallow duplicate properties within declaration blocks.
  'declaration-block-no-duplicate-properties': [
    true,
    {
      ignore: 'consecutive-duplicates',
    },
  ],
  // Disallow longhand properties that can be combined into one shorthand property.
  'declaration-block-no-redundant-longhand-properties': [
    true,
    {
      ignoreShorthands: ['/^grid.*/'],
    },
  ],
  // Disallow shorthand properties that override related longhand properties within declaration blocks.
  'declaration-block-no-shorthand-property-overrides': true,
  // Limit the number of declaration within single line declaration blocks.
  'declaration-block-single-line-max-declarations': 2,
  //  Require or disallow an empty line before declarations.
  'declaration-empty-line-before': [
    'never',
    {
      ignore: ['after-declaration', 'inside-single-line-block'],
    },
  ],
  // Disallow !important within declarations.
  'declaration-no-important': true,
  // Specify a disallowed list of disallowed property and unit pairs within declarations.
  'declaration-property-unit-disallowed-list': {},
  // Specify an allowed list of allowed property and unit pairs within declarations.
  'declaration-property-unit-allowed-list': null,
  // Specify a disallowed list of disallowed property and value pairs within declarations.
  'declaration-property-value-disallowed-list': {
    '/^animation/': ['linear'],
    display: ['table'],
  },
  // Specify an allow list of allowed property and value pairs within declarations.
  'declaration-property-value-allowed-list': {},
  // Disallow !important within keyframe declarations.
  'keyframe-declaration-no-important': true,

  //
  // Font
  //

  // Specify whether or not quotation marks should be used around font family names.
  'font-family-name-quotes': 'always-where-recommended',
  // Disallow duplicate font family names.
  'font-family-no-duplicate-names': true,
  // Require numeric or named (where possible) font-weight values.
  'font-weight-notation': 'numeric',

  //
  // Function
  //

  // Disallow unknown functions.
  'function-no-unknown': true,
  // Specify a disallowed list of disallowed functions.
  'function-disallowed-list': null,
  // Disallow an unspaced operator within calc functions.
  'function-calc-no-unspaced-operator': true,
  // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
  'function-linear-gradient-no-nonstandard-direction': true,
  // Specify lowercase or uppercase for function names.
  'function-name-case': 'lower',
  // Disallow scheme-relative urls.
  'function-url-no-scheme-relative': true,
  // Require or disallow quotes for urls.
  'function-url-quotes': 'always',
  // Specify a disallowed list of disallowed url schemes.
  'function-url-scheme-disallowed-list': null,
  // Specify a allowed list of allowed url schemes.
  'function-url-scheme-allowed-list': ['http', 'https'],
  // Specify a allowed-list of only allowed functions.
  'function-allowed-list': null,

  //
  // General
  //

  // Limit the depth of nesting.
  'max-nesting-depth': 3,
  // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
  'no-descending-specificity': null,
  // Disallow duplicate selectors.
  'no-duplicate-selectors': true,
  // Disallow empty sources.
  'no-empty-source': true,
  // Disallow animation names that do not correspond to a @keyframes declaration.
  'no-unknown-animations': true,
  // Disallow unknown values for properties within declarations.
  'declaration-property-value-no-unknown': true,

  //
  // Length
  //

  // Disallow units for zero lengths.
  'length-zero-no-unit': true,

  //
  // Media
  //

  // Specify pattern of custom media query names.
  'custom-media-pattern': null,
  // Specify a disallowed-list of disallowed media feature names.
  'media-feature-name-disallowed-list': null,
  // Disallow unknown media feature names.
  'media-feature-name-no-unknown': [
    true,
    {
      ignoreMediaFeatureNames: ['prefers-reduced-motion'],
    },
  ],
  // Disallow vendor prefixes for media feature names.
  'media-feature-name-no-vendor-prefix': true,
  // Specify a allowed-list of allowed media feature names
  'media-feature-name-allowed-list': null,

  //
  // Number
  //

  // Limit the number of decimal places allowed in numbers.
  'number-max-precision': null,

  //
  // Property
  //

  // Require or disallow an empty line before custom properties.
  'custom-property-empty-line-before': [
    'always',
    {
      except: ['after-comment', 'after-custom-property', 'first-nested'],
      ignore: ['inside-single-line-block'],
    },
  ],
  // Specify pattern of custom properties.
  'custom-property-pattern': null,
  // Specify a disallowed listed of disallowed properties.
  'property-disallowed-list': [],
  // Disallow unknown properties.
  'property-no-unknown': true,
  // Disallow vendor prefixes for properties.
  'property-no-vendor-prefix': true,
  // Specify a allowed-list of allowed properties.
  'property-allowed-list': null,
  // Disallow redundant values in shorthand properties.
  'shorthand-property-no-redundant-values': true,
  // Disallow duplicate custom properties within declaration blocks.
  'declaration-block-no-duplicate-custom-properties': true,

  //
  // Rule
  //

  // Require or disallow an empty line before rules.
  'rule-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['after-comment'],
    },
  ],

  //
  // Selector
  //

  // Specify a disallowed-list of disallowed attribute operators.
  'selector-attribute-operator-disallowed-list': null,
  // Specify a allowed-list of allowed attribute operators.
  'selector-attribute-operator-allowed-list': null,
  // Require or disallow quotes for attribute values.
  'selector-attribute-quotes': 'always',
  // Specify a pattern for class selectors.
  'selector-class-pattern': /^[a-zA-Z][a-zA-Z0-9-]+$/,
  // Specify a pattern for id selectors.
  'selector-id-pattern': /^[A-Z][a-zA-Z0-9]+$/,
  // Limit the number of attribute selectors in a selector.
  'selector-max-attribute': 1,
  // Limit the number of classes in a selector.
  'selector-max-class': 2,
  // Limit the number of combinators in a selector.
  'selector-max-combinators': 1,
  // Limit the number of id selectors in a selector.
  'selector-max-id': 0,
  // Limit the number of type in a selector.
  'selector-max-type': 1,
  // Limit the number of universal selectors in a selector.
  'selector-max-universal': 2,
  // Limit the number of compound selectors in a selector.
  'selector-max-compound-selectors': 3,
  // Limit the specificity of selectors.
  'selector-max-specificity': '0,3,0',
  // Specify a pattern for the selectors of rules nested within rules.
  'selector-nested-pattern': null,
  // Disallow qualifying a selector by type.
  'selector-no-qualifying-type': true,
  // Disallow vendor prefixes for selectors.
  'selector-no-vendor-prefix': true,
  // Specify a disallowed-list of disallowed pseudo-class selectors.
  'selector-pseudo-class-disallowed-list': null,
  // Disallow unknown pseudo-class selectors.
  'selector-pseudo-class-no-unknown': true,
  // Specify a allowed-list of allowed pseudo-class selectors.
  'selector-pseudo-class-allowed-list': null,
  // Specify single or double colon notation for applicable pseudo-elements.
  'selector-pseudo-element-colon-notation': 'double',
  // Disallow unknown pseudo-element selectors.
  'selector-pseudo-element-no-unknown': true,
  // Specify lowercase or uppercase for type selector.
  'selector-type-case': 'lower',
  // Disallow unknown type selectors.
  'selector-type-no-unknown': true,

  //
  // String
  //

  // Disallow (unescaped) newlines in strings.
  'string-no-newline': true,

  //
  // Time
  //

  'time-min-milliseconds': null,

  //
  // Unit
  //

  // Specify a disallow list of disallowed units.
  'unit-disallowed-list': [],
  // Disallow unknown units.
  'unit-no-unknown': true,
  // Specify a allowed-list of allowed units.
  'unit-allowed-list': null,

  //
  // Value
  //

  // Specify lowercase or uppercase for keywords values.
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['/^--.*font/', '/^\\$.*font/', '/^\\$polaris/'],
    },
  ],
  // Disallow vendor prefixes for values.
  'value-no-vendor-prefix': true,

  //
  // Grid
  //

  // Disallow invalid named grid areas.
  'named-grid-areas-no-invalid': true,
};
