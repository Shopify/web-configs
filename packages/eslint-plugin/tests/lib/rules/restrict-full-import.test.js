const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/restrict-full-import');

const ruleTester = new RuleTester();

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};

const options = [['lodash']];

// prettier-ignore

function configFor(type) {
  const message = `Unexpected full import of restricted module '${options[0][0]}'.`;

  return {
    parserOptions,
    options,
    errors: [
      {
        message,
        type,
      },
    ],
  };
}

ruleTester.run('restrict-full-import', rule, {
  valid: [
    {code: 'import {chain} from "lodash";', parserOptions, options},
    {code: 'import _ from "something-else";', parserOptions, options},
    {code: 'import chain from "lodash/chain";', parserOptions, options},
    {code: 'var chain = require("lodash").chain;', options},
    {code: 'var {chain} = require("lodash");', parserOptions, options},
    {code: 'var chain = require("lodash/chain");', options},
    {code: 'var _ = require("something-else");', options},
  ],

  invalid: [
    {
      code: 'import * as _ from "lodash";',
      ...configFor('ImportDeclaration'),
    },
    {
      code: 'import _ from "lodash";',
      ...configFor('ImportDeclaration'),
    },
    {
      code: 'import _, {chain} from "lodash";',
      ...configFor('ImportDefaultSpecifier'),
    },
    {
      code: 'import {default as _, chain} from "lodash";',
      ...configFor('ImportSpecifier'),
    },
    {
      code: 'var _ = require("lodash");',
      ...configFor('VariableDeclarator'),
    },
    {
      code: 'var _; _ = require("lodash");',
      ...configFor('AssignmentExpression'),
    },
    {
      code: 'var {chain, ...rest} = require("lodash");',
      ...configFor('VariableDeclarator'),
    },
    {
      code: 'var {chain, ...rest} = require("lodash");',
      ...configFor('VariableDeclarator'),
    },
    {
      code: 'var [chain, ...rest] = require("lodash");',
      ...configFor('VariableDeclarator'),
    },
    {
      code: 'var [chain, ...rest] = require("lodash");',
      ...configFor('VariableDeclarator'),
    },
    {
      code: 'var [, , ...rest] = require("lodash");',
      ...configFor('VariableDeclarator'),
    },
  ],
});
