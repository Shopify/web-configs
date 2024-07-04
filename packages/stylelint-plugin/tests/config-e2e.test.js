const {spawnSync} = require('child_process');
const path = require('path');
const {resolve} = require('path');

const stripAnsi = require('strip-ansi');

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
value-keyword-case.invalid.scss
  1:7   ✖  Expected "Value" to be "value"    value-keyword-case
  2:7   ✖  Expected "VALUE" to be "value"    value-keyword-case
  5:10  ✖  Expected "Monaco" to be "monaco"  value-keyword-case
  6:18  ✖  Expected "Monaco" to be "monaco"  value-keyword-case

✖ 4 problems (4 errors, 0 warnings)
  4 errors potentially fixable with the "--fix" option.
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
scss.invalid.scss
   6:5   ✖  Expected ".n3" to have no more than 2 classes                                                          selector-max-class
   6:5   ✖  Expected ".n3" to have no more than 1 combinator                                                       selector-max-combinators
  16:12  ✖  Expected "$value * 1px" instead of "#{$value}px". Consider writing "value" in terms of px originally.  scss/dimension-no-non-numeric-values
  22:3   ✖  Unexpected union class name with the parent selector (&)                                               scss/selector-no-union-class-name

✖ 4 problems (4 errors, 0 warnings)
    `.trim();

    expect(result.error).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });
});

function runStylelint(pattern) {
  const stylelintCmd = resolve(__dirname, `../node_modules/.bin/stylelint`);

  const result = spawnSync(stylelintCmd, [pattern], {
    cwd: path.resolve(__dirname, 'fixtures'),
  });

  return {
    status: result.status,
    output: stripAnsi(result.stdout.toString()).trim(),
    error: stripAnsi(result.stderr.toString()).trim(),
  };
}
