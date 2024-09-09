const {spawnSync} = require('child_process');
const {resolve, relative} = require('path');

/**
 * Tests that report errors in multiple files may change the order of the files
 * across multiple runs.
 * To avoid flaky tests, assert the reporting of errors in one file only per
 * test case. Asserting no errors are reported across multiple files is ok.
 */
describe('stylelint-plugin E2E Tests', () => {
  it('configures value-keyword-case', () => {
    const result = runStylelint('value-keyword-case.*.scss');

    const expectedResult = `
::error file=value-keyword-case.invalid.scss,line=1,col=7,endLine=1,endColumn=12,title=Stylelint problem::Expected "Value" to be "value" (value-keyword-case)
::error file=value-keyword-case.invalid.scss,line=2,col=7,endLine=2,endColumn=12,title=Stylelint problem::Expected "VALUE" to be "value" (value-keyword-case)
::error file=value-keyword-case.invalid.scss,line=5,col=10,endLine=5,endColumn=16,title=Stylelint problem::Expected "Monaco" to be "monaco" (value-keyword-case)
::error file=value-keyword-case.invalid.scss,line=6,col=18,endLine=6,endColumn=24,title=Stylelint problem::Expected "Monaco" to be "monaco" (value-keyword-case)
    `.trim();

    expect(result.error).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });

  it('configures scss files', () => {
    const result = runStylelint('scss.*.scss');

    // The trailing `${''}` is very silly, but stylelint spits out a bunch of
    // trailing whitespace and editors really want to remove that trailing
    // whitespace when saving the file
    const expectedResult = `
::error file=scss.invalid.scss,line=16,col=12,endLine=16,endColumn=22,title=Stylelint problem::Expected "$value * 1px" instead of "#{$value}px". Consider writing "value" in terms of px originally. (scss/dimension-no-non-numeric-values)
::error file=scss.invalid.scss,line=22,col=3,endLine=22,endColumn=8,title=Stylelint problem::Unexpected union class name with the parent selector (&) (scss/selector-no-union-class-name)
::error file=scss.invalid.scss,line=6,col=5,endLine=6,endColumn=8,title=Stylelint problem::Expected ".n3" to have no more than 2 classes (selector-max-class)
::error file=scss.invalid.scss,line=6,col=5,endLine=6,endColumn=8,title=Stylelint problem::Expected ".n3" to have no more than 1 combinator (selector-max-combinators)
    `.trim();
    expect(result.error).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });
});

function runStylelint(pattern) {
  const stylelintCwd = resolve(__dirname, 'fixtures');
  const stylelintCmd = resolve(__dirname, `../node_modules/.bin/stylelint`);

  const result = spawnSync(stylelintCmd, ['--formatter=json', pattern], {
    cwd: stylelintCwd,
  });

  const jsonErrors = JSON.parse(result.stderr.toString().trim());

  const errorLines = [];

  for (const error of jsonErrors) {
    for (const warning of error.warnings) {
      errorLines.push(
        `::error file=${relative(stylelintCwd, error.source)}` +
          `,line=${warning.line}` +
          `,col=${warning.column}` +
          `,endLine=${warning.endLine}` +
          `,endColumn=${warning.endColumn}` +
          `,title=Stylelint problem` +
          `::${warning.text}`,
      );
    }
  }

  return {
    status: result.status,
    output: result.stdout.toString().trim(),
    error: errorLines.join('\n'),
  };
}
