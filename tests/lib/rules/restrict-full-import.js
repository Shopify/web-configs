const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/restrict-full-import');

const ruleTester = new RuleTester();

require('babel-eslint');

const parserOptions = {
  ecmaVersion: 7,
  sourceType: 'module',
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
  },
};

const options = [['lodash']];
const message = `Unexpected full import of restricted module '${options[0][0]}'.`;

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
      parserOptions,
      options,
      errors: [{
        message,
        type: 'ImportDeclaration',
      }],
    },
    {
      code: 'import _ from "lodash";',
      parserOptions,
      options,
      errors: [{
        message,
        type: 'ImportDeclaration',
      }],
    },
    {
      code: 'import _, {chain} from "lodash";',
      parserOptions,
      options,
      errors: [{
        message,
        type: 'ImportDefaultSpecifier',
      }],
    },
    {
      code: 'import {default as _, chain} from "lodash";',
      parserOptions,
      options,
      errors: [{
        message,
        type: 'ImportSpecifier',
      }],
    },
    {
      code: 'var _ = require("lodash");',
      parserOptions,
      options,
      errors: [{
        message,
        type: 'VariableDeclarator',
      }],
    },
    {
      code: 'var _; _ = require("lodash");',
      parserOptions,
      options,
      errors: [{
        message,
        type: 'AssignmentExpression',
      }],
    },
    {
      code: 'var {chain, ...rest} = require("lodash");',
      parserOptions,
      options,
      errors: [{
        message,
        type: 'VariableDeclarator',
      }],
    },
    {
      code: 'var {chain, ...rest} = require("lodash");',
      parserOptions,
      options,
      parser: 'babel-eslint',
      errors: [{
        message,
        type: 'VariableDeclarator',
      }],
    },
    {
      code: 'var [chain, ...rest] = require("lodash");',
      parserOptions,
      options,
      errors: [{
        message,
        type: 'VariableDeclarator',
      }],
    },
    {
      code: 'var [chain, ...rest] = require("lodash");',
      parserOptions,
      options,
      parser: 'babel-eslint',
      errors: [{
        message,
        type: 'VariableDeclarator',
      }],
    },
  ],
});
