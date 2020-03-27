# Prefer Twine over Bindings as the name for twine imports. (prefer-twine)

Twine has historically been referred to by the globals `Twine` and `Bindings`. In order to improve clarity and consistency, we will be using `Twine` exclusively going forward.

## Rule Details

The following patterns are considered warnings:

```js
import Bindings from 'twine';
import tw from 'twine';
```

The following patterns are not warnings:

```js
import Twine from 'twine';
```
