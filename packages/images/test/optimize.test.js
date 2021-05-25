import 'regenerator-runtime/runtime';
import SVGO from 'svgo';

import {svgOptions} from '../optimize';

import {getFixture} from './helpers';

describe('optimize()', () => {
  describe('svg', () => {
    it('removes all useless attributes', async () => {
      const svgo = new SVGO(svgOptions());
      const {data} = await svgo.optimize(getFixture('basic'));
      expect(data).not.toMatch(/title/);
    });
  });
});
