import {resolve as resolvePath} from 'path';
import {readFileSync} from 'fs';

export function getFixture(fixture) {
  return readFileSync(resolvePath(__dirname, 'fixtures', `${fixture}.svg`), 'utf8');
}
