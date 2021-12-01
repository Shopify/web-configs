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
  // Specify lowercase or uppercase for at-rules names.
  'at-rule-name-case': 'lower',
  // Require a newline after at-rule names.
  'at-rule-name-newline-after': 'always-multi-line',
  // Require a single space after at-rule names.
  'at-rule-name-space-after': 'always-single-line',
  // Disallow unknown at-rules.
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
        'at-root',
        'content',
        'debug',
        'each',
        'else',
        'error',
        'extend',
        'for',
        'forward',
        'function',
        'if',
        'include',
        'mixin',
        'return',
        'use',
        'warn',
        'while',
      ],
    },
  ],
  // Disallow vendor prefixes for @rules.
  'at-rule-no-vendor-prefix': true,
  // Require a newline after the semicolon of at-rules.
  'at-rule-semicolon-newline-after': 'always',
  // Specify a allowed-list of allowed at-rules.
  'at-rule-allowed-list': null,
  // Require a single space or disallow whitespace before the semicolons of at-rules.
  'at-rule-semicolon-space-before': 'never',

  //
  // Block
  //

  'block-closing-brace-empty-line-before': 'never',
  // Require a newline or disallow whitespace after the closing brace of blocks.
  'block-closing-brace-newline-after': 'always-single-line',
  // Require a newline or disallow whitespace before the closing brace of blocks.
  'block-closing-brace-newline-before': 'always-multi-line',
  // Require a single space or disallow whitespace after the closing brace of blocks.
  'block-closing-brace-space-after': null,
  // Require a single space or disallow whitespace before the closing brace of blocks.
  'block-closing-brace-space-before': 'always-single-line',
  // Disallow empty blocks.
  'block-no-empty': true,
  // Require a newline after the opening brace of blocks.
  'block-opening-brace-newline-after': 'always-multi-line',
  // Require a newline or disallow whitespace before the opening brace of blocks.
  'block-opening-brace-newline-before': null,
  // Require a single space or disallow whitespace after the opening brace of blocks.
  'block-opening-brace-space-after': 'always-single-line',
  // Require a single space or disallow whitespace before the opening brace of blocks.
  'block-opening-brace-space-before': 'always',

  //
  // Color
  //

  // Specify lowercase or uppercase for hex colors.
  'color-hex-case': 'lower',
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

  // Specify a disallowed list of disallowed functions.
  'function-disallowed-list': null,
  // Disallow an unspaced operator within calc functions.
  'function-calc-no-unspaced-operator': true,
  // Require a newline or disallow whitespace after the commas of functions.
  'function-comma-newline-after': 'never-multi-line',
  // Require a newline or disallow whitespace before the commas of functions.
  'function-comma-newline-before': null,
  // Require a single space or disallow whitespace after the commas of functions.
  'function-comma-space-after': 'always-single-line',
  // Require a single space or disallow whitespace before the commas of functions.
  'function-comma-space-before': 'never',
  // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
  'function-linear-gradient-no-nonstandard-direction': true,
  // Limit the number of adjacent empty lines within functions.
  'function-max-empty-lines': 0,
  // Specify lowercase or uppercase for function names.
  'function-name-case': 'lower',
  // Require a newline or disallow whitespace on the inside of the parentheses of functions.
  'function-parentheses-newline-inside': 'always-multi-line',
  // Require a single space or disallow whitespace on the inside of the parentheses of functions.
  'function-parentheses-space-inside': 'never-single-line',
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
  // Require a single space or disallow whitespace after functions.
  'function-whitespace-after': 'always',

  //
  // General
  //

  // Specify indentation.
  indentation: 2,
  // Specify unix or windows linebreaks
  linebreaks: 'unix',
  // Disallow more than a specified number of adjacent empty lines.
  'max-empty-lines': 3,
  // Limit the length of a line.
  'max-line-length': null,
  // Limit the depth of nesting.
  'max-nesting-depth': 3,
  // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
  'no-descending-specificity': null,
  // Disallow duplicate selectors.
  'no-duplicate-selectors': true,
  // Disallow empty sources.
  'no-empty-source': true,
  // Disallow end-of-line whitespace.
  'no-eol-whitespace': true,
  // Disallow extra semicolons.
  'no-extra-semicolons': true,
  // Disallow missing end-of-file newline.
  'no-missing-end-of-source-newline': true,
  // Disallow animation names that do not correspond to a @keyframes declaration.
  'no-unknown-animations': true,

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
  // Require a single space or disallow whitespace after the colon in media features.
  'media-feature-colon-space-after': 'always',
  // Require a single space or disallow whitespace before the colon in media features.
  'media-feature-colon-space-before': 'never',
  // Specify a disallowed-list of disallowed media feature names.
  'media-feature-name-disallowed-list': null,
  // Specify lowercase or uppercase for media feature names.
  'media-feature-name-case': 'lower',
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
  // Require a single space or disallow whitespace on the inside of the parentheses within media features.
  'media-feature-parentheses-space-inside': 'never',
  // Require a single space or disallow whitespace after the range operator in media features.
  'media-feature-range-operator-space-after': 'always',
  // Require a single space or disallow whitespace before the range operator in media features.
  'media-feature-range-operator-space-before': 'always',
  // Require a newline or disallow whitespace after the commas of media query lists.
  'media-query-list-comma-newline-after': 'always-multi-line',
  // Require a newline or disallow whitespace before the commas of media query lists.
  'media-query-list-comma-newline-before': 'never-multi-line',
  // Require a single space or disallow whitespace after the commas of media query lists.
  'media-query-list-comma-space-after': 'always-single-line',
  // Require a single space or disallow whitespace before the commas of media query lists.
  'media-query-list-comma-space-before': 'never',

  //
  // Number
  //

  // Require or disallow a leading zero for fractional numbers less than 1.
  'number-leading-zero': 'always',
  // Limit the number of decimal places allowed in numbers.
  'number-max-precision': null,
  // Disallow trailing zeros within numbers.
  'number-no-trailing-zeros': true,

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
  // Specify lowercase or uppercase for properties.
  'property-case': 'lower',
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

  // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
  'selector-attribute-brackets-space-inside': 'never',
  // Specify a disallowed-list of disallowed attribute operators.
  'selector-attribute-operator-disallowed-list': null,
  // Require a single space or disallow whitespace after operators within attribute selectors.
  'selector-attribute-operator-space-after': 'never',
  // Require a single space or disallow whitespace before operators within attribute selectors.
  'selector-attribute-operator-space-before': 'never',
  // Specify a allowed-list of allowed attribute operators.
  'selector-attribute-operator-allowed-list': null,
  // Require or disallow quotes for attribute values.
  'selector-attribute-quotes': 'always',
  // Specify a pattern for class selectors.
  'selector-class-pattern': /^[a-zA-Z][a-zA-Z0-9-]+$/,
  // Require a single space or disallow whitespace after the combinators of selectors.
  'selector-combinator-space-after': 'always',
  // Require a single space or disallow whitespace before the combinators of selectors.
  'selector-combinator-space-before': 'always',
  // Disallow non-space characters for descendant combinators of selectors.
  'selector-descendant-combinator-no-non-space': true,
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
  // Require a newline or disallow whitespace after the commas of selector lists.
  'selector-list-comma-newline-after': 'always',
  // Require a newline or disallow whitespace before the commas of selector lists.
  'selector-list-comma-newline-before': null,
  // Require a single space or disallow whitespace after the commas of selector lists.
  'selector-list-comma-space-after': 'never-single-line',
  // Require a single space or disallow whitespace before the commas of selector lists.
  'selector-list-comma-space-before': 'never',
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
  //  Specify lowercase or uppercase for pseudo-class selectors.
  'selector-pseudo-class-case': 'lower',
  // Disallow unknown pseudo-class selectors.
  'selector-pseudo-class-no-unknown': true,
  // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
  'selector-pseudo-class-parentheses-space-inside': 'never',
  // Specify a allowed-list of allowed pseudo-class selectors.
  'selector-pseudo-class-allowed-list': null,
  // Specify lowercase or uppercase for pseudo-element selectors.
  'selector-pseudo-element-case': 'lower',
  // Specify single or double colon notation for applicable pseudo-elements.
  'selector-pseudo-element-colon-notation': 'double',
  // Disallow unknown pseudo-element selectors.
  'selector-pseudo-element-no-unknown': true,
  // Specify lowercase or uppercase for type selector.
  'selector-type-case': 'lower',
  // Disallow unknown type selectors.
  'selector-type-no-unknown': true,
  // Limit the number of adjacent empty lines within selectors.
  'selector-max-empty-lines': 0,

  //
  // String
  //

  // Disallow (unescaped) newlines in strings.
  'string-no-newline': true,
  // Specify single or double quotes around strings.
  'string-quotes': 'single',

  //
  // Time
  //

  'time-min-milliseconds': null,

  //
  // Unit
  //

  // Specify a disallow list of disallowed units.
  'unit-disallowed-list': [],
  // Specify lowercase or uppercase for units.
  'unit-case': 'lower',
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
      ignoreProperties: [
        'font',
        'font-family',
        '/^--.*font/',
        '/^\\$.*font/',
        '/^\\$polaris/',
      ],
    },
  ],
  // Require a newline or disallow whitespace after the commas of value lists.
  'value-list-comma-newline-after': 'always-multi-line',
  // Require a newline or disallow whitespace before the commas of value lists.
  'value-list-comma-newline-before': null,
  // Require a single space or disallow whitespace after the commas of value lists.
  'value-list-comma-space-after': 'always-single-line',
  // Require a single space or disallow whitespace before the commas of value lists.
  'value-list-comma-space-before': 'never',
  // Limit the number of adjacent empty lines within value lists.
  'value-list-max-empty-lines': 0,
  // Disallow vendor prefixes for values.
  'value-no-vendor-prefix': true,

  //
  // Grid
  //

  // Disallow invalid named grid areas.
  'named-grid-areas-no-invalid': true,
};
