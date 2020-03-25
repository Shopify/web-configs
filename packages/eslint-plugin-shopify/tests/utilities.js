import {execSync} from 'child_process';
import {resolve} from 'path';

export function configFile(name) {
  return resolve(__dirname, '..', 'lib', 'config', `${name}.js`);
}

export function execESLint(args) {
  try {
    // --no-eslintrc is required so that we can break out of our project level
    // configuration
    return execSync(
      `node_modules/.bin/eslint --no-eslintrc ${args}`,
    ).toString();
  } catch (error) {
    if (error.stdout) {
      return error.stdout.toString();
    }

    throw error;
  }
}

export function fixtureFile(fixture) {
  return resolve(__dirname, 'fixtures', fixture);
}
