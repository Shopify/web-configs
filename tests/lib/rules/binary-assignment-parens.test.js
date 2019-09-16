const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/binary-assignment-parens');

const ruleTester = new RuleTester();

const NON_BOOLEAN_OPERATORS = ['-', '+', '*', '/', '||', '&&'];
const BOOLEAN_OPERATORS = ['==', '===', '!=', '!==', '>', '>=', '<', '<='];

const validNonBooleanExamples = [].concat(
  ...NON_BOOLEAN_OPERATORS.map((operator) => [
    {code: `var foo = 'bar' ${operator} 'baz';`},
    {code: `var foo = 'bar' ${operator} 'baz';`, options: ['never']},
    {code: `var foo = ('bar' ${operator} 'baz');`},
    {code: `var foo = ('bar' ${operator} 'baz');`, options: ['never']},
    {code: `var foo = ( 'bar' ${operator} 'baz' );`},
    {code: `var foo = ( 'bar' ${operator} 'baz' );`, options: ['never']},
    {code: `var foo; foo = 'bar' ${operator} 'baz';`},
    {code: `var foo; foo = ('bar' ${operator} 'baz');`, options: ['never']},
  ]),
);

const validBooleanExamples = [].concat(
  ...BOOLEAN_OPERATORS.map((operator) => [
    {code: `var foo = ('bar' ${operator} 'baz')`},
    {code: `var foo = ( 'bar' ${operator} 'baz' )`},
    {code: `var foo = 'bar' ${operator} 'baz'`, options: ['never']},
    {code: `var foo; foo = ('bar' ${operator} 'baz')`},
    {code: `var foo; foo = ( 'bar' ${operator} 'baz' )`},
    {code: `var foo; foo = 'bar' ${operator} 'baz'`, options: ['never']},
  ]),
);

const validLogicalExamples = [
  {code: "var foo = ('bar' !== 'bar') || ('baz' === 'baz');"},
  {code: "var foo = ( 'bar' !== 'bar' ) || ( 'baz' === 'baz' );"},
  {code: "var foo = ('bar' !== 'bar') || ('baz' === 'baz') && qux;"},
  {code: "var foo = ('bar' !== 'bar') || ('baz' === 'baz') && (qux <= 2);"},
  {code: "var foo = ('bar' !== 'bar') || qux;"},
  {code: "var foo; foo = ('bar' !== 'bar') || ('baz' === 'baz');"},
  {code: "var foo; foo = ( 'bar' !== 'bar' ) || ( 'baz' === 'baz' );"},
  {code: "var foo; foo = ('bar' !== 'bar') || ('baz' === 'baz') && qux;"},
  {
    code:
      "var foo; foo = ('bar' !== 'bar') || ('baz' === 'baz') && (qux <= 2);",
  },
  {code: "var foo; foo = ('bar' !== 'bar') || qux;"},

  {code: "var foo = 'bar' !== 'bar' || 'baz' === 'baz';", options: ['never']},
  {
    code: "var foo =  'bar' !== 'bar'  ||  'baz' === 'baz';",
    options: ['never'],
  },
  {
    code: "var foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux;",
    options: ['never'],
  },
  {
    code: "var foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux <= 2;",
    options: ['never'],
  },
  {code: "var foo = 'bar' !== 'bar' || qux;", options: ['never']},
  {
    code: "var foo; foo = 'bar' !== 'bar' || 'baz' === 'baz';",
    options: ['never'],
  },
  {
    code: "var foo; foo =  'bar' !== 'bar'  ||  'baz' === 'baz' ;",
    options: ['never'],
  },
  {
    code: "var foo; foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux;",
    options: ['never'],
  },
  {
    code: "var foo; foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux <= 2;",
    options: ['never'],
  },
  {code: "var foo; foo = 'bar' !== 'bar' || qux;", options: ['never']},
];

const invalidBooleanExamples = [].concat(
  ...BOOLEAN_OPERATORS.map((operator) => [
    {
      code: `var foo = 'bar' ${operator} 'baz'`,
      errors: [
        {
          message:
            'You must include parentheses around a binary assignment expression.',
          type: 'BinaryExpression',
        },
      ],
    },

    {
      code: `var foo = ('bar' ${operator} 'baz')`,
      options: ['never'],
      errors: [
        {
          message:
            'You must not include parentheses around a binary assignment expression.',
          type: 'BinaryExpression',
        },
      ],
    },

    {
      code: `var foo = ( 'bar' ${operator} 'baz' )`,
      options: ['never'],
      errors: [
        {
          message:
            'You must not include parentheses around a binary assignment expression.',
          type: 'BinaryExpression',
        },
      ],
    },

    {
      code: `var foo; foo = 'bar' ${operator} 'baz'`,
      errors: [
        {
          message:
            'You must include parentheses around a binary assignment expression.',
          type: 'BinaryExpression',
        },
      ],
    },

    {
      code: `var foo; foo = ('bar' ${operator} 'baz')`,
      options: ['never'],
      errors: [
        {
          message:
            'You must not include parentheses around a binary assignment expression.',
          type: 'BinaryExpression',
        },
      ],
    },

    {
      code: `var foo; foo = ( 'bar' ${operator} 'baz' )`,
      options: ['never'],
      errors: [
        {
          message:
            'You must not include parentheses around a binary assignment expression.',
          type: 'BinaryExpression',
        },
      ],
    },
  ]),
);

function errors(count, needsParens) {
  const err = [];

  // eslint-disable-next-line no-var
  for (var index = 0; index < count; index++) {
    err.push({
      type: 'BinaryExpression',
      message: needsParens
        ? 'You must include parentheses around a binary assignment expression.'
        : 'You must not include parentheses around a binary assignment expression.',
    });
  }

  return err;
}

const invalidLogicalExamples = [
  {
    code: "var foo = ('bar' !== 'bar') || ('baz' === 'baz');",
    options: ['never'],
    errors: errors(2, false),
  },
  {
    code: "var foo = ( 'bar' !== 'bar' ) || ( 'baz' === 'baz' );",
    options: ['never'],
    errors: errors(2, false),
  },
  {
    code: "var foo = ('bar' !== 'bar') || ('baz' === 'baz') && qux;",
    options: ['never'],
    errors: errors(2, false),
  },
  {
    code: "var foo = ('bar' !== 'bar') || ('baz' === 'baz') && (qux <= 2);",
    options: ['never'],
    errors: errors(3, false),
  },
  {
    code: "var foo = ('bar' !== 'bar') || qux;",
    options: ['never'],
    errors: errors(1, false),
  },
  {
    code: "var foo; foo = ('bar' !== 'bar') || ('baz' === 'baz');",
    options: ['never'],
    errors: errors(2, false),
  },
  {
    code: "var foo; foo = ( 'bar' !== 'bar' ) || ( 'baz' === 'baz' );",
    options: ['never'],
    errors: errors(2, false),
  },
  {
    code: "var foo; foo = ('bar' !== 'bar') || ('baz' === 'baz') && qux;",
    options: ['never'],
    errors: errors(2, false),
  },
  {
    code:
      "var foo; foo = ('bar' !== 'bar') || ('baz' === 'baz') && (qux <= 2);",
    options: ['never'],
    errors: errors(3, false),
  },
  {
    code: "var foo; foo = ('bar' !== 'bar') || qux;",
    options: ['never'],
    errors: errors(1, false),
  },

  {
    code: "var foo = 'bar' !== 'bar' || 'baz' === 'baz';",
    errors: errors(2, true),
  },
  {
    code: "var foo =  'bar' !== 'bar'  ||  'baz' === 'baz';",
    errors: errors(2, true),
  },
  {
    code: "var foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux;",
    errors: errors(2, true),
  },
  {
    code: "var foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux <= 2;",
    errors: errors(3, true),
  },
  {code: "var foo = 'bar' !== 'bar' || qux;", errors: errors(1, true)},
  {
    code: "var foo; foo = 'bar' !== 'bar' || 'baz' === 'baz';",
    errors: errors(2, true),
  },
  {
    code: "var foo; foo =  'bar' !== 'bar'  ||  'baz' === 'baz' ;",
    errors: errors(2, true),
  },
  {
    code: "var foo; foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux;",
    errors: errors(2, true),
  },
  {
    code: "var foo; foo = 'bar' !== 'bar' || 'baz' === 'baz' && qux <= 2;",
    errors: errors(3, true),
  },
  {code: "var foo; foo = 'bar' !== 'bar' || qux;", errors: errors(1, true)},
];

ruleTester.run('binary-assignment-parens', rule, {
  valid: [].concat(
    validNonBooleanExamples,
    validBooleanExamples,
    validLogicalExamples,
  ),
  invalid: [].concat(invalidBooleanExamples, invalidLogicalExamples),
});
