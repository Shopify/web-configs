module.exports = {
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
};
