import shopifyIconLoader from '../icon-loader';
import {getFixture} from './helpers';

describe('shopifyIconLoader()', () => {
  describe('body', () => {
    it('has the SVG body', () => {
      const {body} = getExportFromLoader(getFixture('basic'));
      expect(typeof body).toBe('string');
    });

    it('includes the entire SVG except for the SVG tag', () => {
      const source = getFixture('basic');
      const {body} = getExportFromLoader(source);

      expect(body).not.toMatch(/svg/);
      expect(body).toMatch(/^<.*>$/);
    });

    it('sets white fills to be currentColor', () => {
      const {body} = getExportFromLoader(getFixture('multiple-fills'));
      expect(body.match(/fill="currentColor"/g).length).toBe(2);
    });

    it('removes colored fills entirely', () => {
      const {body} = getExportFromLoader(getFixture('multiple-fills'));
      expect(body.match(/fill="#000"/g)).toBeNull();
    });
  });

  describe('viewBox', () => {
    it('extracts the viewBox', () => {
      const {viewBox} = getExportFromLoader(getFixture('basic'));
      expect(viewBox).toBe('0 0 16 16');
    });
  });
});

function getExportFromLoader(source, query = {}) {
  const result = runLoader(source, query);
  return JSON.parse(result.replace(/module\.exports = /, ''));
}

function runLoader(source, query = {}) {
  const context = {
    query,
    options: {context: ''},
    cacheable(cacheable) { return cacheable; },
    resource: 'test.svg',
    resourcePath: 'test.svg',
  };

  return shopifyIconLoader.call(context, source);
}
