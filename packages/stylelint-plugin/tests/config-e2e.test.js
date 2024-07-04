const {spawnSync} = require('child_process');
const path = require('path');
const {resolve} = require('path');

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
::error file=value-keyword-case.invalid.scss,line=1,col=7,endLine=1,endColumn=8,title=Stylelint problem::Expected "Value" to be "value" (value-keyword-case) [maybe fixable] - https://stylelint.io/user-guide/rules/value-keyword-case
::error file=value-keyword-case.invalid.scss,line=2,col=7,endLine=2,endColumn=8,title=Stylelint problem::Expected "VALUE" to be "value" (value-keyword-case) [maybe fixable] - https://stylelint.io/user-guide/rules/value-keyword-case
::error file=value-keyword-case.invalid.scss,line=5,col=10,endLine=5,endColumn=11,title=Stylelint problem::Expected "Monaco" to be "monaco" (value-keyword-case) [maybe fixable] - https://stylelint.io/user-guide/rules/value-keyword-case
::error file=value-keyword-case.invalid.scss,line=6,col=18,endLine=6,endColumn=19,title=Stylelint problem::Expected "Monaco" to be "monaco" (value-keyword-case) [maybe fixable] - https://stylelint.io/user-guide/rules/value-keyword-case
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
::error file=scss.invalid.scss,line=6,col=5,endLine=6,endColumn=8,title=Stylelint problem::Expected ".n3" to have no more than 2 classes (selector-max-class) - https://stylelint.io/user-guide/rules/selector-max-class
::error file=scss.invalid.scss,line=6,col=5,endLine=6,endColumn=8,title=Stylelint problem::Expected ".n3" to have no more than 1 combinator (selector-max-combinators) - https://stylelint.io/user-guide/rules/selector-max-combinators
::error file=scss.invalid.scss,line=16,col=12,endLine=16,endColumn=22,title=Stylelint problem::Expected "$value * 1px" instead of "#{$value}px". Consider writing "value" in terms of px originally. (scss/dimension-no-non-numeric-values) - https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values
::error file=scss.invalid.scss,line=22,col=3,endLine=22,endColumn=8,title=Stylelint problem::Unexpected union class name with the parent selector (&) (scss/selector-no-union-class-name) - https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name
    `.trim();
    expect(result.error).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });
});

function runStylelint(pattern) {
  const stylelintCmd = resolve(__dirname, `../node_modules/.bin/stylelint`);

  const result = spawnSync(stylelintCmd, ['--formatter=github', pattern], {
    cwd: path.resolve(__dirname, 'fixtures'),
  });

  return {
    status: result.status,
    output: result.stdout.toString().trim(),
    error: result.stderr
      .toString()
      .trim()
      .replace(/file=.*?fixtures\//g, 'file='),
  };
}
