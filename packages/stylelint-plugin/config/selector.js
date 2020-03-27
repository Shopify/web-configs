module.exports = {
  // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
  'selector-attribute-brackets-space-inside': 'never',
  // Specify a blacklist of disallowed attribute operators.
  'selector-attribute-operator-blacklist': null,
  // Require a single space or disallow whitespace after operators within attribute selectors.
  'selector-attribute-operator-space-after': 'never',
  // Require a single space or disallow whitespace before operators within attribute selectors.
  'selector-attribute-operator-space-before': 'never',
  // Specify a whitelist of allowed attribute operators.
  'selector-attribute-operator-whitelist': null,
  // Require or disallow quotes for attribute values.
  'selector-attribute-quotes': 'always',
  // Specify a pattern for class selectors.
  'selector-class-pattern': /^[a-zA-Z][a-zA-Z0-9]+$/,
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
  // Specify a blacklist of disallowed pseudo-class selectors.
  'selector-pseudo-class-blacklist': null,
  //  Specify lowercase or uppercase for pseudo-class selectors.
  'selector-pseudo-class-case': 'lower',
  // Disallow unknown pseudo-class selectors.
  'selector-pseudo-class-no-unknown': true,
  // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
  'selector-pseudo-class-parentheses-space-inside': 'never',
  // Specify a whitelist of allowed pseudo-class selectors.
  'selector-pseudo-class-whitelist': null,
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
};
