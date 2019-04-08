/* eslint-env node, mocha */

import {expect} from 'chai';
import {execESLint, fixtureFile} from '../../utilities';

describe('config', () => {
  describe('typescript', () => {
    it('ignores files not handled by TypeScript', () => {
      expect(
        execESLint(
          `--ext .js --ext .ts --config ${fixtureFile(
            'typescript-no-js/.eslintrc.js',
          )} ${fixtureFile('typescript-no-js')}`,
        ),
      ).to.eq('');
    }).timeout(8000);

    it('identifies import path issues', () => {
      const esLintOutput = execESLint(
        `--ext .ts --config ${fixtureFile(
          'typescript-imports/.eslintrc.js',
        )} ${fixtureFile('typescript-imports')}`,
      );

      expect(esLintOutput).to.contain('2 problems (2 errors, 0 warnings)');

      // import/no-cycle error
      expect(esLintOutput).to.contain(
        `typescript-imports/check-cycle/index.ts\n  2:1  error  Dependency cycle detected`,
      );

      // import/no-useless-path-segments error
      expect(esLintOutput).to.contain(
        `typescript-imports/check-path-segment/File2.ts\n  1:21  error  Useless path segments for "../check-path-segment/File1", should be "./File1"`,
      );
    }).timeout(8000);
  });
});
