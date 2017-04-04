import SVGO from 'svgo';
import {svgOptions} from '../optimize';
import {getFixture} from './helpers';

describe('optimize()', () => {
  describe('svg', () => {
    it('removes all useless attributes', async () => {
      const content = await optimize(getFixture('basic'));
      expect(content).not.toMatch(/width/);
      expect(content).not.toMatch(/height/);
      expect(content).not.toMatch(/title/);
    });
  });
});

function optimize(source, options) {
  const svgo = new SVGO(svgOptions(options));

  return new Promise((resolve, reject) => {
    svgo.optimize(source, (result) => {
      if (result.error) {
        return reject(new Error(result.error));
      } else {
        return resolve(result.data);
      }
    });
  });
}
