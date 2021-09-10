module.exports = {
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
};
