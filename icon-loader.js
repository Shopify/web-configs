const VIEWBOX_REGEX = /viewBox="([^"]*)"/;
const SVG_REGEX = /(<svg[^>]*>|<\/svg>)/g;
const FILL_REGEX = /fill="[^"]*"/g;
const WHITE_HEX_REGEX = /['"]#fff(?:fff)?['"]/i;

module.exports = function shopifyIconLoader(source) {
  this.cacheable(true);

  const finalSource = source.replace(FILL_REGEX, (fill) => {
    return WHITE_HEX_REGEX.test(fill) ? 'fill="currentColor"' : '';
  });

  // Issue with ESLint recognizing this as needing an object destructure
  // eslint-disable-next-line prefer-destructuring
  const viewBox = VIEWBOX_REGEX.exec(finalSource)[1];
  const svgExport = JSON.stringify({
    viewBox,
    body: finalSource.replace(SVG_REGEX, ''),
  });

  return `module.exports = ${svgExport}`;
};
