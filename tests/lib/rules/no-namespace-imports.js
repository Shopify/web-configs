const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/no-namespace-imports');

const ruleTester = new RuleTester();

require('typescript-eslint-parser');

const parserOptions = {ecmaVersion: 6, sourceType: 'module'};

ruleTester.run('no-namespace-imports', rule, {
  valid: [
    {
      code: `import React from 'react';`,
      parserOptions,
    },
    {
      code: `import {useEffect} from 'react';`,
      parserOptions,
    },
    {
      code: `import React, {useEffect, useState} from 'react';`,
      parserOptions,
    },
    {
      code: `import {Location} from 'history';`,
      parserOptions,
    },
    {
      code: `import * as Foo from 'foo';`,
      parserOptions,
      options: [{allow: ['foo']}],
    },
    {
      code: `import * as testing from '@shopify/react-testing';`,
      parserOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['foo', 'shopify/*']}],
    },
    {
      code: `
        import * as Foo from 'foo';
        import * as testing from '@shopify/react-testing';`,
      parserOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['foo', 'shopify/*']}],
    },
  ],
  invalid: [
    {
      code: `import * as React from 'react';`,
      parserOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      output: `import React from 'react';`,
    },
    {
      code: `import * as H from 'history';`,
      parserOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      output: `import H from 'history';`,
    },
    {
      code: `import * as faker from 'faker';`,
      parserOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      output: `import faker from 'faker';`,
    },
    {
      code: `import * as React from 'react';`,
      parserOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['bar']}],
      output: `import React from 'react';`,
    },
    {
      code: `
        import * as Foo from 'foo';
        import * as testing from '@shopify/react-testing';
      `,
      parserOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['shopify/*']}],
    },
  ],
});
