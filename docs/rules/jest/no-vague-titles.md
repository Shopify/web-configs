# Prevent the usage of vague words in test statements. (jest/no-vague-titles)
This rule encourages more explicit test descriptions by preventing the use of the vague words.

The following vague terms are flagged:

* "correct"
* "appropriate"
* "all"
* "properly"
* "should"
* "every"
* "descriptive"

## Rule Details

Using vague words in test descriptions often fail to communicate the meaningful details of what the underlying code is meant to do. Enabling this rule will encourage developers to write more specific and readable test descriptions.

Examples of **incorrect** code for this rule:

```js
it('is called with the correct parameters')
it('is called with all the plugins')
test('renders the appropriate markup')
describe('receives the correct props')

```

Examples of **correct** code for this rule:

```js
it(`is called with the user's id and password`)
it('is called with the Foo and Bar plugins')
test('renders the user avatar and email')
describe('receives the date and publishState props from the router params')
```

### `allow`

```json
{
  "jest/no-vague-titles": [
    "error",
    {
      "allow": ["properly", "correct"]
    }
  ]
}
```

This array option allows a subset of vague words so that this rule does not report their usage as being incorrect.

By default, none of these options are enabled (the equivalent of `{ "allow": [] }`).

### `ignore`

```json
{
  "jest/no-vague-titles": [
    "error",
    {
      "ignore": ["describe", "test"]
    }
  ]
}
```

This array option whitelists function names so that this rule does not report their usage as being incorrect. There are eight possible values.

* `"describe"`
* `"test"`
* `"it"`
* `"xdescribe"`
* `"xtest"`
* `"xit"`
* `"fdescribe"`
* `"fit"`

By default, none of these options are enabled (the equivalent of `{ "ignore": [] }`).

## When Not To Use It

If you do not wish to prevent the use of the vague words in test descriptions, you can safely disable this rule.
