/* eslint no-var: off */

var merge = require('merge');

module.exports = {
  plugins: ['stylelint-scss'],
  rules: merge(
    require('./rules/at-rule'),
    require('./rules/block'),
    require('./rules/color'),
    require('./rules/comment'),
    require('./rules/declaration'),
    require('./rules/font'),
    require('./rules/function'),
    require('./rules/general'),
    require('./rules/length'),
    require('./rules/media'),
    require('./rules/number'),
    require('./rules/property'),
    require('./rules/rule'),
    require('./rules/scss'),
    require('./rules/selector'),
    require('./rules/string'),
    require('./rules/time'),
    require('./rules/unit'),
    require('./rules/value')
  ),
};
