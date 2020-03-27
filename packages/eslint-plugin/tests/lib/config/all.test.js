import {execESLint, fixtureFile} from '../../utilities';

describe('config', () => {
  it('has valid plugins and requires', () => {
    expect(
      execESLint(
        `--config ${fixtureFile('all/.eslintrc.js')} ${fixtureFile('all')}`,
      ),
    ).toBe('');
  }, 8000);
});
