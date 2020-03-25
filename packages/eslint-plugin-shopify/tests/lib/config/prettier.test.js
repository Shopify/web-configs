import {configFile, execESLint, fixtureFile} from '../../utilities';

describe('config', () => {
  describe('prettier', () => {
    it('validates source files using prettier', () => {
      expect(
        execESLint(
          `--config ${configFile('prettier')} ${fixtureFile('prettier')}`,
        ),
      ).toMatch(/Replace .*"bar".* with .*'bar'/);
    }, 8000);

    it('validates TypeScript source files using prettier', () => {
      expect(
        execESLint(
          `--ext .ts --config ${fixtureFile(
            'prettier-typescript/.eslintrc.js',
          )} ${fixtureFile('prettier-typescript')}`,
        ),
      ).toMatch(/Replace .*"bar".* with .*'bar'/);
    }, 8000);

    it('does not generate prettier errors in graphql files', () => {
      expect(
        execESLint(
          `--ext .graphql --ignore-pattern "**/prettier-graphql/build/*" --config "${fixtureFile(
            'prettier-graphql/.eslintrc.js',
          )}" "${fixtureFile('prettier-graphql')}"`,
        ),
      ).toBe('');
    }, 8000);

    it('uses .prettierrc as the source of prettier rules', () => {
      expect(
        execESLint(
          `--config ${configFile('prettier')} ${fixtureFile(
            'prettier-config',
          )}`,
        ),
      ).toMatch(/Delete .;./);
    }, 8000);

    it('uses .prettierrc as the source of prettier rules for TypeScript', () => {
      expect(
        execESLint(
          `--ext .ts --config ${fixtureFile(
            'prettier-typescript/.eslintrc.js',
          )} ${fixtureFile('prettier-config')}`,
        ),
      ).toMatch(/Delete .;./);
    }, 8000);
  });
});
