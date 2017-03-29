module.exports = {
  // Disallow standard properties inside :root rules.
  'root-no-standard-properties': true,
  // Require or disallow an empty line before nested rules.
  'rule-nested-empty-line-before': ['always', {
    except: ['first-nested'],
    ignore: ['after-comment'],
  }],
  // Require or disallow an empty line before non-nested rules.
  'rule-non-nested-empty-line-before': ['always-multi-line', {
    ignore: ['after-comment'],
  }],
};
