/* eslint-env node, mocha */
import {expect} from 'chai';

// eslint-disable-next-line shopify/strict-component-boundaries
import {execESLint, fixtureFile} from '../../utilities';

describe('config', () => {
  describe('all', () => {
    it('has valid plugins and requires', () => {
      expect(
        execESLint(
          `--config ${fixtureFile('all/.eslintrc.js')} ${fixtureFile('all')}`,
        ),
      ).to.eq('');
    }).timeout(8000);
  });
});
/* eslint-enable flowtype/require-valid-file-annotation */
