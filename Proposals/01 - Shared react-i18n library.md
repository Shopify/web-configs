# Proposal: shared react-i18n library

## Requirements

We must have the following features for providing translations within a React app:

* Async/ deferred loading of language files for both client and server (prevents bundles from being bloated by having every locale embedded)
* Provision of fallback strings (for temporary cases where translations are not yet available)
* Hot-swappable on the client
* Translations provided per component with all ancestor translations available to a given component (including its own; components could choose not to provide a translation file) (precents the main bundle from being bloated by default translations for every section)
* Connection with other i18n utilities (formatting, locale access, etc)
* Support for pluralization
* Support for replacements, including replacements with React components
* Easy support for the `accepts-language` header and custom locale

Additionally, at least one of the following is needed for issue detection in development:

* Linting rule to check for existence of the key in at least the default dictionary
* Clear error indicator when calling translation with missing keys

## API Sketch

Below is the primary API that the package would expose:

```ts
interface TranslationDictionary {
  [key: string]: string | React.ReactElement;
}

interface I18N {
  locale: string;
  defaultCurrencyCode?: string;
  defaultTimezone?: string;

  t(key: string, replacements?: {[key: string]: string | React.ReactElement}): React.ReactElement;
  t(key: string, replacements?: {[key: string]: string}): string;
  translate(key: string, replacements?: TranslationDictionary): React.ReactElement;
  translate(key: string, replacements?: {[key: string]: string}): string;
  formatNumber(amount: number, options?: Intl.NumberFormatOptions): string;
  formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string;
}

interface WithI18NProps {
  i18n: I18N;
}

export function WithI18N(options?: {
  fallback: object;
  translations(locale: string): TranslationDictionary | Promise<TranslationDictionary> | Error;
}): <Props & C>(component: ReactComponent<Props> & C) => ReactComponent<Props & WithTranslationProps> & C
```

Below is an example of how the utility would be used for a typical component:

```ts
export default WithI18N({
  fallback: enTranslations,
  translations(locale) {
    return import(`./locales/${locale}`)
  }
})(MyComponent);
```

A locale file for the component should probably continue to nest under a name that matches the component so that there is a relatively unique key path for every translation:

```json
{
  "MyComponent": {
    "greeting": "Hello"
  }
}
```

This per-component setup also un-nests the translation file significantly and makes it much easier to understand where your translations should go.

Finally, we'll expose a linting rule to make sure that no non-existent keys are used. We will do so by erroring when:

1. A dynamic key is used (we should just always use a static key so that it can be evaluated statically)
2. A key is used that does not exist in the default translation file (will probably just read `./locales/en(-.*)?.json` by convention), or in the default translation files of any parent component (so, read up the tree in case the component relies on translations provided to, for instance, the entire product section or the entire app).

## Open Questions

* Do we need to expose a shorthand like `i18n.t()`?
* What should pluralization look like?
* Will we be able to import the locale file in parallel to the component itself, for async-loaded components?
* Should we just rely on a convention where locales are always in a collocated /locales folder?
* If not based on conventions, what utilities do we need to provide for making it easy to for instance use fr for fr-ca?
* Separate `formatX` methods for number/ date/ currency/ percentage/ etc, or just for number/ date?
