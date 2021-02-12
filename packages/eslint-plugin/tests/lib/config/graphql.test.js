import {configFile, execESLint, fixtureFile} from '../../utilities';

describe('config', () => {
  describe('graphql', () => {
    it('validates .graphql files using graphql plugin', () => {
      expect(
        execESLint(
          `--ignore-pattern "**/graphql-lint-error/build/*" --config "${configFile(
            'graphql',
          )}" "${fixtureFile('graphql-lint-error')}"`,
        ),
      ).toMatch(/Cannot query field .*DOES_NOT_EXIST/);
    }, 8000);

    it('validates .graphql files with required `id` field using graphql plugin', () => {
      expect(
        execESLint(
          `--ignore-pattern "**/graphql-lint-error/build/*" --config "${configFile(
            'graphql',
          )}" "${fixtureFile('graphql-lint-error')}"`,
        ),
      ).toMatch(/'id' field required on 'foo'/);
    }, 8000);

    it('validates .graphql file syntax using graphql plugin', () => {
      expect(
        execESLint(
          `--ignore-pattern "**/graphql-syntax-error/build/*" --config "${configFile(
            'graphql',
          )}" "${fixtureFile('graphql-syntax-error')}"`,
        ),
      ).toMatch(/Syntax Error.+Expected Name/);
    }, 8000);
  });
});
