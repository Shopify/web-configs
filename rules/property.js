module.exports = {
  // Require or disallow an empty line before custom properties.
  'custom-property-empty-line-before': ['always', {
    except: ['after-comment', 'after-custom-property', 'first-nested'],
    ignore: ['inside-single-line-block'],
  }],
  // Specify pattern of custom properties.
  'custom-property-pattern': null,
  // Specify a blacklist of disallowed properties.
  'property-blacklist': [],
  // Specify lowercase or uppercase for properties.
  'property-case': 'lower',
  // Disallow unknown properties.
  'property-no-unknown': true,
  // Disallow vendor prefixes for properties.
  'property-no-vendor-prefix': true,
  // Specify a whitelist of allowed properties.
  'property-whitelist': null,
  // Disallow redundant values in shorthand properties.
  'shorthand-property-no-redundant-values': true,
};
