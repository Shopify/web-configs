const stylelint = require('stylelint');

const plugins = ['./packages/stylelint-plugin/rules/content-no-strings'];

export function testRule(rule, schema) {
  expect.extend({
    toHaveMessage(testCase) {
      if (testCase.message === undefined) {
        return {
          message: () =>
            'Expected "reject" test case to have a "message" property',
          pass: false,
        };
      }

      return {
        pass: true,
      };
    },
  });

  describe(`${schema.ruleName}`, () => {
    const stylelintConfig = {
      plugins,
      rules: {
        [schema.ruleName]: schema.config,
      },
    };

    if (schema.accept && schema.accept.length) {
      describe('accept', () => {
        schema.accept.forEach((testCase) => {
          const spec = testCase.only ? it.only : it;

          spec(testCase.description || 'no description', () => {
            const options = {
              code: testCase.code,
              config: stylelintConfig,
              syntax: schema.syntax,
              codeFilename: schema.codeFilename,
            };

            return stylelint.lint(options).then((output) => {
              // eslint-disable-next-line jest/no-standalone-expect
              expect(output.results[0].warnings).toStrictEqual([]);
              if (!schema.fix) {
                return;
              }

              // eslint-disable-next-line promise/no-nesting
              return stylelint.lint({fix: true, ...options}).then((output2) => {
                const fixedCode = getOutputCss(output2);

                // eslint-disable-next-line jest/no-standalone-expect
                expect(fixedCode).toBe(testCase.code);
              });
            });
          });
        });
      });
    }

    if (schema.reject && schema.reject.length) {
      describe('reject', () => {
        schema.reject.forEach((testCase) => {
          const spec = testCase.only ? it.only : it;

          spec(testCase.description || 'no description', () => {
            const options = {
              code: testCase.code,
              config: stylelintConfig,
              syntax: schema.syntax,
              codeFilename: schema.codeFilename,
            };

            return stylelint.lint(options).then((output) => {
              const warnings = output.results[0].warnings;
              const warning = warnings[0];

              // eslint-disable-next-line jest/no-standalone-expect
              expect(warnings.length).toBeGreaterThanOrEqual(1);
              // expect(testCase).toHaveMessage();

              if (testCase.message !== undefined) {
                // eslint-disable-next-line jest/no-standalone-expect
                expect(warning.text).toBe(testCase.message);
              }

              if (testCase.line !== undefined) {
                // eslint-disable-next-line jest/no-standalone-expect
                expect(warning.line).toBe(testCase.line);
              }

              if (testCase.column !== undefined) {
                // eslint-disable-next-line jest/no-standalone-expect
                expect(warning.column).toBe(testCase.column);
              }

              if (!schema.fix) {
                return;
              }

              if (!testCase.fixed) {
                throw new Error(
                  'If using { fix: true } in test schema, all reject cases must have { fixed: .. }',
                );
              }

              // Check the fix
              // eslint-disable-next-line promise/no-nesting
              return stylelint.lint({fix: true, ...options}).then((output2) => {
                const fixedCode = getOutputCss(output2);

                // eslint-disable-next-line jest/no-standalone-expect
                expect(fixedCode).toBe(testCase.fixed);
              });
            });
          });
        });
      });
    }
  });
}

function getOutputCss(output) {
  const result = output.results[0]._postcssResult;
  const css = result.root.toString(result.opts.syntax);

  return css;
}
