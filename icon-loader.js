const VIEWBOX_REGEX = /viewBox="([^"]*)"/;
const SVG_REGEX = /(<svg[^>]*>|<\/svg>)/g;
const FILL_REGEX = /fill="[^"]*"/g;

module.exports = function shopifyIconLoader(source) {
  this.cacheable(true);

  const finalSource = source.replace(FILL_REGEX, (fill) => {
    return fill.includes('#FFF') ? 'fill="currentColor"' : '';
  });

  const viewBox = VIEWBOX_REGEX.exec(finalSource)[1];
  const svgExport = JSON.stringify({
    viewBox,
    body: finalSource.replace(SVG_REGEX, ''),
  });

  return `module.exports = ${svgExport}`;
};
