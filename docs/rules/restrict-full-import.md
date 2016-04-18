# Prevents importing the entirety of a package. (restrict-full-import)

Importing the entirety of a large module can be undesirable because it becomes harder to track what properties are being used.

## Rule Details

This rule prevents default imports for a configurable list of modules. This is **not** a module blacklist; individual properties can still be imported, including those from the list of modules provided to this rule.

This rule takes a single argument, an array of module names that should not be fully imported.

The following patterns are considered warnings with the option `['lodash']`:

```js
import _ from 'lodash';
import _, {chain} from 'lodash';
import {default as _} from 'lodash';
import * as _ from 'lodash';

var _ = require('lodash');
var {chain, ...rest} = require('lodash');
```

The following patterns are not warnings:

```js
import _ from 'something-else';
import {chain, map} from 'lodash';
import chain from 'lodash/chain';

var _ = require('something-else');
var chain = require('lodash').chain;
var chain = require('lodash/chain');
var {chain} = require('lodash');
```

## When Not To Use It

If you do not want to restrict default imports from any modules, you can safely disable this rule.
