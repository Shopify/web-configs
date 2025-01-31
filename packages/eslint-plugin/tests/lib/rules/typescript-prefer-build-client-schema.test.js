const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');
const typescriptParser = require('@typescript-eslint/parser');

const rule = require('../../../lib/rules/typescript-prefer-build-client-schema');

const ruleTester = new RuleTester({
  languageOptions: {parser: typescriptParser},
});

function error() {
  return {
    message: 'Prefer buildClientSchema to buildSchema',
  };
}

ruleTester.run('typescript-prefer-build-client-schema', rule, {
  valid: [
    {
      code: `import {foo} from 'bar';`,
    },
    {
      code: `import {foo} from 'graphql';`,
    },
    {
      code: `import {buildSchema} from 'foo';`,
    },
  ],
  invalid: [
    {
      code: `import {buildSchema} from 'graphql';`,
      errors: [error()],
    },
    {
      code: `import {foo, buildSchema} from 'graphql';`,
      errors: [error()],
    },
    {
      code: `import {buildSchema, bar} from 'graphql';`,
      errors: [error()],
    },
    {
      code: `import {buildSchema as foo} from 'graphql';`,
      errors: [error()],
    },
  ],
});
