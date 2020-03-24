const stylelint = require('stylelint');

// this is kinda wonky, and if we update stylelint and use the standalone
// version I think we can avoid needing this, but that's a job for later
const plugins = [
  './rules/content-no-strings',
];


global.testRule = (rule, schema) => {
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

  // eslint-disable-next-line jest/valid-describe
  describe(schema.ruleName, () => {
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
              expect(output.results[0].warnings).toEqual([]);
              if (!schema.fix) {
                return;
              }

              // Check the fix
              // eslint-disable-next-line promise/no-nesting, consistent-return
              return stylelint
                .lint({fix: true, ...options})
                .then((output2) => {
                  const fixedCode = getOutputCss(output2);

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

              expect(warnings.length).toBeGreaterThanOrEqual(1);
              // expect(testCase).toHaveMessage();

              if (testCase.message !== undefined) {
                expect(warning.text).toBe(testCase.message);
              }

              if (testCase.line !== undefined) {
                expect(warning.line).toBe(testCase.line);
              }

              if (testCase.column !== undefined) {
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
              // eslint-disable-next-line promise/no-nesting, consistent-return
              return stylelint
                .lint({fix: true, ...options})
                .then((output2) => {
                  const fixedCode = getOutputCss(output2);

                  expect(fixedCode).toBe(testCase.fixed);
                });
            });
          });
        });
      });
    }
  });
};

function getOutputCss(output) {
  const result = output.results[0]._postcssResult;
  const css = result.root.toString(result.opts.syntax);

  return css;
}

global.testConfig = (input) => {
  let testFn;

  if (input.only) {
    testFn = test.only;
  } else if (input.skip) {
    testFn = test.skip;
  } else {
    testFn = test;
  }

  testFn(input.description, () => {
    const config = {
      plugins,
      rules: {
        [input.ruleName]: input.config,
      },
    };

    return stylelint
      .lint({
        code: '',
        config,
      })
      .then((data) => {
        const invalidOptionWarnings = data.results[0].invalidOptionWarnings;

        if (input.valid) {
          expect(invalidOptionWarnings).toHaveLength(0);
        } else {
          expect(invalidOptionWarnings[0].text).toBe(input.message);
        }
      });
  });
};
