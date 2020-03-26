import {readFileSync} from 'fs';
import {resolve as resolvePath} from 'path';

export function getFixture(fixture) {
  return readFileSync(
    resolvePath(__dirname, 'fixtures', `${fixture}.svg`),
    'utf8',
  );
}
