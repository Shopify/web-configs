module.exports = [
  'last 3 chrome versions',
  'last 3 firefox versions',
  'last 3 opera versions',
  'last 3 edge versions',
  'last 3 safari versions',
  // Mobile browsers
  // The minimum supported iOS Safari version is 13.6, in line with our mobile
  // apps, however browserslist thinks `ios >= 13.6` should not include version
  // `13.4-13.7`, which we do want to support as 13.6 falls within that range
  'last 3 chromeandroid versions',
  'last 1 firefoxandroid versions',
  'ios >= 13.4',
];
