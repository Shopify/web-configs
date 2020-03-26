# Prefer that imports from within a directory extend to the file from where they are importing without relying on an index file. (no-ancestor-directory-import)

Imports inside the same directory should extend directly to the file from where they are importing without relying on an index file. This means the source of these imports should not end with a directory (`/`), but the path should terminate at an individual filename. This preserves the index file inside a directory as a mechanism for exposing pieces of the module to the outside application, rather than as a way to export the parts that the module internally depends on.

## Rule Details

This rule disallows any full directory imports from within that same directory.

Examples of **incorrect** code for this rule:

```ts
import Thing from '../';
import OtherThing from './';
import Module from '../../index.ts'
```

Examples of **correct** code for this rule:

```ts
import Thing from '../Thing';
import OtherThing from './OtherThing';
import Module from '../Module'
```

## When Not To Use It

If you do not wish to prevent directory imports from within that directory, you can safely disable this rule.
