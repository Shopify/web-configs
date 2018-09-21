/* eslint-env node, mocha */
/* eslint-disable flowtype/require-valid-file-annotation */
import {expect} from 'chai';
import {execSync} from 'child_process';

// eslint-disable-next-line shopify/strict-component-boundaries
import {fixtureFile} from '../../utilities';

describe('config', () => {
  describe('prettier', () => {
    it('validates source files using prettier', () => {
      expect(
        () =>
          execSync(
            `node_modules/.bin/eslint --no-ignore ${fixtureFile('prettier')}`,
          ),
        // eslint-disable-next-line function-paren-newline
      )
        .throws()
        .with.property('stdout')
        .to.match(/Replace .*"bar".* with .*'bar'/);
    }).timeout(8000);
  });
});
