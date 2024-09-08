/**
 * The GitHub formatter was deprecated: https://github.com/stylelint/stylelint/issues/7447
 * This is an inlined version of the formatter at the time of deprecation.
 *
 * @see https://github.com/stylelint/stylelint/blob/8fefd145f86b74f182286550675881c47b164fba/lib/formatters/githubFormatter.mjs
 *
 * @license MIT https://github.com/stylelint/stylelint/blob/main/LICENSE
 */

/**
 * @see https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions
 *
 * @type {import('stylelint').Formatter}
 */
function githubFormatter(results, returnValue) {
  const title = 'Stylelint problem';
  const metadata = returnValue.ruleMetadata;

  const lines = results.flatMap((result) => {
    const sourceAndWarnings = preprocessWarnings(result);
    const source = sourceAndWarnings.source;
    const warnings = sourceAndWarnings.warnings;

    return warnings.map((warning) => {
      const line = warning.line;
      const column = warning.column;
      const endLine = warning.endLine;
      const endColumn = warning.endColumn;
      const text = warning.text;
      const severity = warning.severity;
      const rule = warning.rule;

      const msg = buildMessage(text, metadata[rule]);

      return endLine === undefined
        ? `::${severity} file=${source},line=${line},col=${column},title=${title}::${msg}`
        : `::${severity} file=${source},line=${line},col=${column},endLine=${endLine},endColumn=${endColumn},title=${title}::${msg}`;
    });
  });

  lines.push('');

  return lines.join('\n');
}

/**
 * @param {string} msg
 * @param {Partial<import('stylelint').RuleMeta> | undefined} metadata
 * @returns {string}
 */
function buildMessage(msg, metadata) {
  if (!metadata) {
    return msg;
  }

  const url = metadata.url ? ` - ${metadata.url}` : '';

  let additional = [
    metadata.fixable ? 'maybe fixable' : '',
    metadata.deprecated ? 'deprecated' : '',
  ]
    .filter(Boolean)
    .join(', ');

  additional = additional ? ` [${additional}]` : '';

  return `${msg}${additional}${url}`;
}

/**
 * Preprocess warnings in a given lint result.
 * Note that this function has a side-effect.
 *
 * @param {LintResult} result
 * @returns {LintResult}
 */
function preprocessWarnings(result) {
  for (const error of result.parseErrors || []) {
    result.warnings.push(parseErrorToWarning(error));
  }

  for (const warning of result.warnings) {
    warning.severity = normalizeSeverity(warning);
  }

  result.warnings.sort(byLocationOrder);

  return result;
}

/**
 * @param {ParseError} error
 * @returns {Warning}
 */
function parseErrorToWarning(error) {
  return {
    line: error.line,
    column: error.column,
    rule: error.stylelintType,
    severity: 'error',
    text: `${error.text} (${error.stylelintType})`,
  };
}

/**
 * @param {Warning} warning
 * @returns {Severity}
 */
function normalizeSeverity(warning) {
  // NOTE: Plugins may add a warning without severity, for example,
  // by directly using the PostCSS `Result#warn()` API.
  return warning.severity || 'error';
}

/**
 * @param {Warning} warningA
 * @param {Warning} warningB
 * @returns {number}
 */
function byLocationOrder(warningA, warningB) {
  // positionless first
  if (!warningA.line && warningB.line) {
    return -1;
  }

  // positionless first
  if (warningA.line && !warningB.line) {
    return 1;
  }

  if (warningA.line < warningB.line) {
    return -1;
  }

  if (warningA.line > warningB.line) {
    return 1;
  }

  if (warningA.column < warningB.column) {
    return -1;
  }

  if (warningA.column > warningB.column) {
    return 1;
  }

  return 0;
}

module.exports = githubFormatter;
