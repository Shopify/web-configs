const merge = require('merge');

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order', './rules/content-no-strings'],
  rules: merge(
    require('./config/at-rule'),
    require('./config/block'),
    require('./config/color'),
    require('./config/comment'),
    require('./config/declaration'),
    require('./config/font'),
    require('./config/function'),
    require('./config/general'),
    require('./config/length'),
    require('./config/media'),
    require('./config/number'),
    require('./config/order'),
    require('./config/property'),
    require('./config/rule'),
    require('./config/scss'),
    require('./config/selector'),
    require('./config/string'),
    require('./config/time'),
    require('./config/unit'),
    require('./config/value'),
    {
      '@shopify/content-no-strings': null,
    },
  ),
};
