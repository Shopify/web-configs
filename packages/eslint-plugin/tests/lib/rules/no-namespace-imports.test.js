const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/no-namespace-imports');

const ruleTester = new RuleTester();

ruleTester.run('no-namespace-imports', rule, {
  valid: [
    {
      code: `import React from 'react';`,
    },
    {
      code: `import {useEffect} from 'react';`,
    },
    {
      code: `import React, {useEffect, useState} from 'react';`,
    },
    {
      code: `import {Location} from 'history';`,
    },
    {
      code: `import * as Foo from 'foo';`,
      options: [{allow: ['foo']}],
    },
    {
      code: `import * as testing from '@shopify/react-testing';`,
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
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
    },
    {
      code: `import * as H from 'history';`,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
    },
    {
      code: `import * as faker from 'faker';`,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
    },
    {
      code: `import * as React from 'react';`,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['bar']}],
    },
    {
      code: `
        import * as Foo from 'foo';
        import * as testing from '@shopify/react-testing';
      `,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['shopify/*']}],
    },
  ],
});
