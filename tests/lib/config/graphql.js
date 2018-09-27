/* eslint-env node, mocha */
import {expect} from 'chai';

// eslint-disable-next-line shopify/strict-component-boundaries
import {configFile, execESLint, fixtureFile} from '../../utilities';

describe('config', () => {
  describe('graphql', () => {
    it('validates .graphql files using graphql plugin', () => {
      expect(
        execESLint(
          `--ext .graphql --ignore-pattern "**/graphql-lint-error/build/*" --config "${configFile(
            'graphql',
          )}" "${fixtureFile('graphql-lint-error')}"`,
        ),
      ).to.match(/Cannot query field .*DOES_NOT_EXIST/);
    }).timeout(8000);

    it('validates .graphql file syntax using graphql plugin', () => {
      expect(
        execESLint(
          `--ext .graphql --ignore-pattern "**/graphql-syntax-error/build/*" --config "${configFile(
            'graphql',
          )}" "${fixtureFile('graphql-syntax-error')}"`,
        ),
      ).to.match(/Syntax Error.+Expected Name/);
    }).timeout(8000);
  });
});
