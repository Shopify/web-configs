# Require inputs have have autocomplete attributes when necessary

The HTML `autocomplete` attribute helps users to complete filling in forms by using data stored in the browser. This is particularly useful for people with motor disabilities or cognitive impairment who may have difficulties filling out forms online. In React, the `autocomplete` attribute is written in camelCase as `autoComplete`.

For example, a form input asking for someone’s email address would need to include the `autoComplete` attribute in order to send a hint to browser or other user agents to query for this data:

```tsx
<input type="email" id="email" name="email" autoComplete="email" />
```

## Rule Details

This rule ensures that we always add an `autoComplete` attribute and value to React input elements if the type is: `color`, `date`, `datetime-local`, `email`, `month`, `number`, `password`, `range`, `search`, `tel`, `text`, `time`, `url`, or `week`.

Even if you do not want the browser to autofill a user's information, it is recommended you still have an `autoComplete` attribute with the value `off` or `nope`.

The following pattern is considered a warning:

Examples of **incorrect** code for this rule:

```tsx
<input type="email" id="email" name="email" />
<input type="password" id="password" name="password" />
```

Examples of **correct** code for this rule:

```tsx
<input type="email" id="email" name="email" autoComplete="email" />
<input type="password" id="password" name="password" autoComplete="password" />
```
