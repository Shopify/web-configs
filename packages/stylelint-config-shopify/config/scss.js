module.exports = {
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
  'scss/at-import-no-partial-leading-underscore': true,
  // Disallow unneeded `!= null` in if expressions (`@if $x != null` can be simplified to `@if $x`)
  'scss/at-if-no-null': true,
  // Specify blacklist of disallowed file extensions for partial names in @import commands.
  'scss/at-import-partial-extension-blacklist': ['scss'],
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
};
