const {spawnSync} = require('child_process');
const path = require('path');
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

    const expectedResult = [
      {
        deprecations: [],
        errored: true,
        invalidOptionWarnings: [],
        parseErrors: [],
        source: 'value-keyword-case.invalid.scss',
        warnings: [
          {
            column: 7,
            endColumn: 12,
            endLine: 1,
            line: 1,
            rule: 'value-keyword-case',
            severity: 'error',
            text: 'Expected "Value" to be "value" (value-keyword-case)',
          },
          {
            column: 7,
            endColumn: 12,
            endLine: 2,
            line: 2,
            rule: 'value-keyword-case',
            severity: 'error',
            text: 'Expected "VALUE" to be "value" (value-keyword-case)',
          },
          {
            column: 10,
            endColumn: 16,
            endLine: 5,
            line: 5,
            rule: 'value-keyword-case',
            severity: 'error',
            text: 'Expected "Monaco" to be "monaco" (value-keyword-case)',
          },
          {
            column: 18,
            endColumn: 24,
            endLine: 6,
            line: 6,
            rule: 'value-keyword-case',
            severity: 'error',
            text: 'Expected "Monaco" to be "monaco" (value-keyword-case)',
          },
        ],
      },
      {
        deprecations: [],
        errored: false,
        invalidOptionWarnings: [],
        parseErrors: [],
        source: 'value-keyword-case.valid.scss',
        warnings: [],
      },
    ];

    expect(result.error).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });

  it('configures scss files', () => {
    const result = runStylelint('scss.*.scss');

    // The trailing `${''}` is very silly, but stylelint spits out a bunch of
    // trailing whitespace and editors really want to remove that trailing
    // whitespace when saving the file
    const expectedResult = [
      {
        source: 'scss.invalid.scss',
        deprecations: [],
        invalidOptionWarnings: [],
        parseErrors: [],
        errored: true,
        warnings: [
          {
            line: 16,
            column: 12,
            endLine: 16,
            endColumn: 22,
            rule: 'scss/dimension-no-non-numeric-values',
            severity: 'error',
            text: 'Expected "$value * 1px" instead of "#{$value}px". Consider writing "value" in terms of px originally. (scss/dimension-no-non-numeric-values)',
          },
          {
            line: 22,
            column: 3,
            endLine: 22,
            endColumn: 8,
            rule: 'scss/selector-no-union-class-name',
            severity: 'error',
            text: 'Unexpected union class name with the parent selector (&) (scss/selector-no-union-class-name)',
          },
          {
            line: 6,
            column: 5,
            endLine: 6,
            endColumn: 8,
            rule: 'selector-max-class',
            severity: 'error',
            text: 'Expected ".n3" to have no more than 2 classes (selector-max-class)',
          },
          {
            line: 6,
            column: 5,
            endLine: 6,
            endColumn: 8,
            rule: 'selector-max-combinators',
            severity: 'error',
            text: 'Expected ".n3" to have no more than 1 combinator (selector-max-combinators)',
          },
        ],
      },
      {
        source: 'scss.valid.scss',
        deprecations: [],
        invalidOptionWarnings: [],
        parseErrors: [],
        errored: false,
        warnings: [],
      },
    ];
    expect(result.error).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });
});

function runStylelint(pattern) {
  const stylelintCwd = path.resolve(__dirname, 'fixtures');
  const stylelintCmd = resolve(__dirname, `../node_modules/.bin/stylelint`);

  const result = spawnSync(stylelintCmd, ['--formatter=json', pattern], {
    cwd: stylelintCwd,
  });

  return {
    status: result.status,
    output: result.stdout.toString().trim(),
    error: JSON.parse(result.stderr.toString().trim(), function (key, value) {
      if (key !== 'source') {
        return value;
      }

      return relative(stylelintCwd, value);
    }),
  };
}
