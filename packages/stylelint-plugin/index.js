module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order', './rules'],
  // Emit errors for `stylelint-disable` comments that don't actually match any lints that need to be disabled.
  reportNeedlessDisables: true,
  // Emit errors for `stylelint-disable` comments that don't match rules that are specified in the configuration object.
  reportInvalidScopeDisables: true,
  rules: {
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
      {ignoreShorthands: ['/^grid.*/', 'inset']},
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

    //
    // Order
    //
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
        properties: ['content', 'quotes'],
      },
      // Positioning
      {
        order: 'flexible',
        properties: ['position', 'z-index', 'top', 'right', 'bottom', 'left'],
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

    //
    // Shopify
    //

    '@shopify/content-no-strings': null,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: require('postcss-scss'),
      rules: {
        // Require or disallow a newline after the closing brace of @else statements.
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        // Require a single space or disallow whitespace after the closing brace of @else statements.
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        // Require an empty line or disallow empty lines before @-else.
        'scss/at-else-empty-line-before': 'never',
        // Disallow at-extends (@extend) with missing placeholders.
        'scss/at-extend-no-missing-placeholder': true,
        // Specify a pattern for Sass/SCSS-like function names.
        'scss/at-function-pattern': null,
        // Require or disallow a newline after the closing brace of @if statements.
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        // Require a single space or disallow whitespace after the closing brace of @if statements.
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        // Disallow leading underscore in partial names in @import.
        'scss/load-no-partial-leading-underscore': true,
        // Disallow unneeded `!= null` in if expressions (`@if $x != null` can be simplified to `@if $x`)
        'scss/at-if-no-null': true,
        // Specify blacklist of disallowed file extensions for partial names in @import commands.
        'scss/at-import-partial-extension-disallowed-list': ['scss'],
        // Specify whitelist of allowed file extensions for partial names in @import commands.
        'scss/at-import-partial-extension-whitelist': null,
        // Require using `@each $key, $value in $list` instead of getting the value inside the loop
        'scss/at-each-key-value-single-line': true,
        // Disallow parentheses in argumentless @mixin calls.
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        // Specify a pattern for Sass/SCSS-like mixin names.
        'scss/at-mixin-pattern': null,
        // Disalow parentheses around at directives calls (`@if ($x)` can be simplified to `@if $x`   )
        'scss/at-rule-conditional-no-parentheses': true,
        // Disallow using string interpolation to build numbers with units (`#{x}px` should be `$x * 1px`)
        'scss/dimension-no-non-numeric-values': true,
        // Require a newline after the colon in $-variable declarations.
        'scss/dollar-variable-colon-newline-after': null,
        // Require a single space or disallow whitespace after the colon in $-variable declarations.
        'scss/dollar-variable-colon-space-after': 'always-single-line',
        // Require a single space or disallow whitespace before the colon in $-variable declarations.
        'scss/dollar-variable-colon-space-before': 'never',
        // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
        'scss/dollar-variable-no-missing-interpolation': true,
        // Specify a pattern for Sass-like variables.
        'scss/dollar-variable-pattern': null,
        // Specify a pattern for %-placeholders.
        'scss/percent-placeholder-pattern': null,
        // Require or disallow an empty line before //-comments.
        'scss/double-slash-comment-empty-line-before': [
          'always',
          {
            except: ['first-nested'],
            ignore: ['between-comments', 'stylelint-commands'],
          },
        ],
        // Require or disallow //-comments to be inline comments.
        'scss/double-slash-comment-inline': null,
        // Require or disallow whitespace after the // in //-comments
        'scss/double-slash-comment-whitespace-inside': 'always',
        // Require or disallow properties with - in their names to be in a form of a nested group.
        'scss/declaration-nested-properties': 'never',
        // Disallow nested properties of the same "namespace" be divided into multiple groups.
        'scss/declaration-nested-properties-no-divided-groups': true,
        // Disallow unquoted strings inside the unquote function
        'scss/function-unquote-no-unquoted-strings-inside': true,
        //  Require a media feature value be a $-variable or disallow $-variables in media feature values.
        'scss/media-feature-value-dollar-variable': null,
        // Disallow linebreaks after Sass operators.
        'scss/operator-no-newline-after': true,
        // Disallow linebreaks before Sass operators.
        'scss/operator-no-newline-before': true,
        // Disallow unspaced operators in Sass operations.
        'scss/operator-no-unspaced': true,
        // Disallow non-CSS `@imports` in partial files.
        'scss/partial-no-import': true,
        // Disallow redundant nesting selectors (`&`).
        'scss/selector-no-redundant-nesting-selector': true,
        // Disallow union class names  (e.g. `&-foo`)
        'scss/selector-no-union-class-name': true,
        // Disallow dollar variables within a stylesheet.
        'scss/no-dollar-variables': null,
        // Disallow duplicate dollar variables within a stylesheet.
        'scss/no-duplicate-dollar-variables': null,
        // Disallow duplicate mixis within a stylesheet
        'scss/no-duplicate-mixins': true,
        // Disallow assignment to namespaced variables.
        'scss/dollar-variable-no-namespaced-assignment': true,
        // Disallow usage of @use without a namespace.
        'scss/at-use-no-unnamespaced': true,
        // Disallow unknown functions. Should be used instead of Stylelint's function-no-unknown.
        // Doesn't support `@use 'foo' as bar` yet.
        // https://github.com/stylelint-scss/stylelint-scss/issues/760
        'function-no-unknown': null,
        'scss/function-no-unknown': null,
        // Require or disallow extension in @import commands.
        'scss/load-partial-extension': 'always',
        // Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,

        // Incompatible with scss at the moment.
        // Disallow unknown values for properties within declarations.
        'declaration-property-value-no-unknown': null,
      },
    },
  ],
};
