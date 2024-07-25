import {execESLint, fixtureFile} from '../../utilities';

describe('config', () => {
  describe('typescript', () => {
    it('ignores files not handled by TypeScript', () => {
      expect(
        execESLint(
          `--config ${fixtureFile(
            'typescript-no-js/eslint.config.js',
          )} ${fixtureFile('typescript-no-js')}`,
        ),
      ).toBe('');
    }, 8000);
  });

  it('identifies import path issues', () => {
    const esLintOutput = execESLint(
      `--config ${fixtureFile(
        'typescript-imports/eslint.config.js',
      )} ${fixtureFile('typescript-imports')}`,
    );

    expect(esLintOutput).toStrictEqual(
      expect.stringContaining('3 problems (3 errors, 0 warnings)'),
    );

    // import/no-cycle error
    expect(esLintOutput).toStrictEqual(
      expect.stringContaining('typescript-imports/check-cycle/index.ts'),
    );
    expect(esLintOutput).toStrictEqual(
      expect.stringContaining('Dependency cycle detected'),
    );

    // import/no-useless-path-segments error
    expect(esLintOutput).toStrictEqual(
      expect.stringContaining('typescript-imports/check-path-segment/File2.ts'),
    );
    expect(esLintOutput).toStrictEqual(
      expect.stringContaining(
        'Useless path segments for "../check-path-segment/File1", should be "./File1',
      ),
    );
  }, 8000);
});
