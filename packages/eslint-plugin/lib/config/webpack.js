const merge = require('merge');

module.exports = {
  rules: merge(require('./rules/webpack'), {
    'no-process-env': 'off',
  }),
};
