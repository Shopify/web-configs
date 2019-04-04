module.exports = {
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
};
