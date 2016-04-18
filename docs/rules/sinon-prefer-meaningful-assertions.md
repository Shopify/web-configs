# Requires the use of meaningful sinon assertions through sinon.assert or sinon-chai. (sinon-prefer-meaningful-assertions)

Sinon provides [spy-specific assertions](http://sinonjs.org/docs/#assertions) that have more useful error messages. These same, more meaningful assertions are also available for BDD-style tests using [sinon-chai](https://github.com/domenic/sinon-chai).

## Rule Details

This rule aims to enforce that you always use the more meaningful sinon assertions where possible.

The following patterns are considered warnings:

```js
// assert
assert.true(mySpy.called);
assert.equal(mySpy.callCount, 3);
assert.true(mySpy.alwaysCalledWith(foo));

// expect
expect(mySpy.called).to.be.true;
expect(mySpy.callCount).to.equal(3);
expect(mySpy.myMethod.alwaysCalledWith(foo)).to.be.true;
expect(mySpy.myMethod.alwaysCalledWithNew).to.be.true;

// should
mySpy.called.should.be.true;
mySpy.callCount.should.equal(3);
mySpy.myMethod.alwaysCalledWith(foo).should.be.true;
mySpy.myMethod.alwaysCalledWithNew.should.be.true;
```

The following patterns are not warnings:

```js
// assert
assert.called(mySpy);
assert.callCount(mySpy, 3);
assert.alwaysCalledWith(mySpy, foo);
assert.true(mySpy.calledWithNew()); // no dedicated assert method
assert.true(called); // smart enough to detect when it's probably a spy

expect(mySpy).to.have.been.called;
expect(mySpy).to.have.callCount(3);
expect(mySpy.myMethod).to.have.been.alwaysCalledWith(foo);
expect(mySpy.myMethod).to.have.been.alwaysCalledWithNew;

mySpy.to.have.been.called;
mySpy.to.have.callCount(3);
mySpy.myMethod.should.have.been.alwaysCalledWith(foo);
mySpy.myMethod.should.have.been.alwaysCalledWithNew;
```

## When Not To Use It

If you don’t use sinon, or don’t care about having more meaningful assertion messages, you can safely disable this rule.
