import {docsUrl} from '../../lib/utilities';

describe('utilities', () => {
  describe('docsUrl()', () => {
    it('returns the repo documentation url when given a rule name', () => {
      expect(docsUrl('some-fake-rule')).toBe(
        'https://github.com/Shopify/web-foundation/blob/main/packages/eslint-plugin/docs/rules/some-fake-rule.md',
      );
      expect(docsUrl('another-fake-rule')).toBe(
        'https://github.com/Shopify/web-foundation/blob/main/packages/eslint-plugin/docs/rules/another-fake-rule.md',
      );
    });

    it('returns the repo documentation url when given a prefixed rule name', () => {
      expect(docsUrl('jest/some-fake-rule')).toBe(
        'https://github.com/Shopify/web-foundation/blob/main/packages/eslint-plugin/docs/rules/jest/some-fake-rule.md',
      );
      expect(docsUrl('typescript/another-fake-rule')).toBe(
        'https://github.com/Shopify/web-foundation/blob/main/packages/eslint-plugin/docs/rules/typescript/another-fake-rule.md',
      );
    });
  });
});
