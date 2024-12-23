const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../lib/rules/sinon-prefer-meaningful-assertions');

const ruleTester = new RuleTester();

function bddError(type) {
  return [{type, message: 'Use the more meaningful sinon-chai assertions.'}];
}

const tddError = [
  {
    message: 'Use the more meaningful sinon.assert assertions.',
    type: 'CallExpression',
  },
];

ruleTester.run('sinon-prefer-meaningful-assertions', rule, {
  valid: [
    {code: 'expect(foo).to.be.true;'},
    {code: 'expect(foo).to.equal(3);'},
    {code: 'expect(foo).to.have.been.called;'},
    {code: 'expect(foo).to.have.callCount(3);'},
    {code: 'expect(foo).to.have.alwaysCalledWithNew(Foo);'},
    {code: 'expect(foo.bar).to.have.been.called;'},
    {code: 'expect(foo.bar.baz).to.have.been.called;'},
    {code: 'expect(foo.bar()).to.have.been.called;'},
    {code: 'expect()'},

    {code: 'expect(called).to.be.true;'},
    {code: 'expect(callCount(3)).to.equal(3);'},

    {code: 'foo.should.be.true;'},
    {code: 'foo.should.equal(3);'},
    {code: 'foo.should.have.been.called;'},
    {code: 'foo.should.have.callCount(3);'},
    {code: 'foo.should.have.alwaysCalledWithNew(Foo);'},
    {code: 'foo.bar.should.have.been.called;'},
    {code: 'foo.bar.baz.should.have.been.called;'},
    {code: 'foo.bar().should.have.been.called;'},

    {code: 'called.should.be.true;'},
    {code: 'callCount(3).should.equal(3);'},

    {code: 'assert.true(foo);'},
    {code: 'assert.equal(foo, 3);'},
    {code: 'assert.equal(3, foo);'},
    {code: 'assert.called(foo.bar);'},
    {code: 'assert.callCount(foo.bar.baz(), 3);'},
    {code: 'assert.notCalled(foo.bar);'},
    {code: 'assert.true(foo.calledWithNew());'},

    {code: 'sinon.assert.called(foo.bar);'},
    {code: 'sinon.assert.callCount(foo.bar.baz(), 3);'},
    {code: 'sinon.assert.notCalled(foo.bar);'},

    {code: 'assert.true(called);'},
    {code: 'assert.equal(callCount, 3);'},
  ],

  invalid: [
    {
      code: 'expect(foo.called).to.be.true;',
      errors: bddError('MemberExpression'),
    },
    {
      code: 'expect(foo.callCount).to.equal(3);',
      errors: bddError('CallExpression'),
    },
    {
      code: 'expect(foo.alwaysCalledWithNew()).to.be.true;',
      errors: bddError('MemberExpression'),
    },
    {
      code: 'expect(foo.bar.callCount).to.equal(3);',
      errors: bddError('CallExpression'),
    },
    {
      code: 'expect(foo.bar.alwaysCalledWithNew()).to.be.true;',
      errors: bddError('MemberExpression'),
    },
    {
      code: 'expect(foo.bar.baz().callCount).to.equal(3);',
      errors: bddError('CallExpression'),
    },
    {
      code: 'expect(foo.bar.baz().alwaysCalledWithNew()).to.be.true;',
      errors: bddError('MemberExpression'),
    },

    {code: 'foo.called.should.be.true;', errors: bddError('MemberExpression')},
    {
      code: 'foo.callCount.should.equal(3);',
      errors: bddError('CallExpression'),
    },
    {
      code: 'foo.alwaysCalledWithNew().should.be.true;',
      errors: bddError('MemberExpression'),
    },
    {
      code: 'foo.bar.callCount.should.equal(3);',
      errors: bddError('CallExpression'),
    },
    {
      code: 'foo.bar.alwaysCalledWithNew().should.be.true;',
      errors: bddError('MemberExpression'),
    },
    {
      code: 'foo.bar.baz().callCount.should.equal(3);',
      errors: bddError('CallExpression'),
    },
    {
      code: 'foo.bar.baz().alwaysCalledWithNew().should.be.true;',
      errors: bddError('MemberExpression'),
    },

    {code: 'assert.true(foo.called);', errors: tddError},
    {code: 'assert.equal(foo.callCount, 3);', errors: tddError},
    {code: 'assert.equal(foo.bar.callCount, 3);', errors: tddError},
    {code: 'assert.equal(foo.bar.baz().callCount, 3);', errors: tddError},
    {code: 'assert.true(foo.bar.notCalled);', errors: tddError},
  ],
});
