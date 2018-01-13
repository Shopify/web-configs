/* eslint-env node, mocha */
/* eslint-disable flowtype/require-valid-file-annotation */
import {execSync} from 'child_process';

const path = require('path');

describe('config', () => {
  describe('all', () => {
    it('has valid plugins and requires', () => {
      const allConfigPath = path.join(process.cwd(), 'lib', 'config', 'all.js');
      execSync(
        `node_modules/.bin/eslint --config ${allConfigPath} ${__dirname}`,
      );
    });
  });
});
