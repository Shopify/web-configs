const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/sinon-no-restricted-features');

const ruleTester = new RuleTester();

const sinonRestricted = 'sinon.mock().something();';
const sinonUnrestricted = 'sinon.stub();';
const aliasRestricted = 'sandbox.mock().something();';
const aliasUnrestricted = 'sandbox.stub();';
const injectRestricted = 'this.mock().something();';
const injectUnrestricted = 'this.stub();';

const restricted = ['mock'];
const aliases = ['sandbox'];
const errors = [{
  message: `Unexpected use of sinon.${restricted[0]}.`,
  type: 'MemberExpression',
}];

ruleTester.run('sinon-no-restricted-features', rule, {
  valid: [
    {code: sinonRestricted},
    {code: sinonRestricted, options: [{restricted, aliases}]},
    {code: sinonUnrestricted, options: [{restricted}]},
    {code: aliasRestricted, options: [{restricted}]},
    {code: aliasUnrestricted, options: [{restricted, aliases}]},
    {code: injectRestricted, options: [{restricted, aliases}]},
    {code: injectUnrestricted, options: [{restricted, aliases, injected: true}]},
  ],

  invalid: [
    {code: sinonRestricted, options: [{restricted}], errors},
    {code: aliasRestricted, options: [{restricted, aliases}], errors},
    {code: injectRestricted, options: [{restricted, injected: true}], errors},
  ],
});
