import {optimize} from 'svgo';

import {svgOptions} from '../optimize';

import {getFixture} from './helpers';

describe('optimize()', () => {
  describe('svg', () => {
    it('removes all useless attributes', () => {
      const {data} = optimize(getFixture('basic'), svgOptions());
      expect(data).not.toMatch(/title/);
    });
  });
});
