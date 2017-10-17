# API over implementation

Another way to phrase this principle is to expose only what you need to, never more. Being conscious and protective of your public API is incredibly important; when we expose implementation details externally, we make the piece of code harder to understand, and increase the risk that users will form dependencies on those details, making the component hard to maintain and update in the future.

When considering the public API for your code, always try to write it in the context of the domain, not in the context of its effects on the implementation. This makes it easier for someone to get to know (or can intuit) things about the domain without them having to deeply understand how it works under the hood.

Strive to make the default behaviour completely automatic, and acceptable variations on that behaviour extremely easy to dictate. Boilerplate is not inherently bad, and it’s important to include it where you can’t be sure of doing the right thing by default, but where it is possible to provide the behaviour a reasonably competent user would expect by default, you should do so.

Below are a few examples of decisions that demonstrate this principle:

* We think of components as a collection of all the languages that go into creating them (at a minimum: CSS, HTML, and JavaScript). Because of this, we collocate those files and hide them away as implementation details, exposing only an API by which the component decides the effects on those languages. In other words: we separate concerns by component (API), not by language (implementation).

* Whenever possible, variations on components should describe their impact on the end user, not the specific visual details of that variation (for example, `primary` over `purple` for a button).

* Unless it is a foundational part of the stack, try to avoid exposure of exactly what tool/ community package is in use to accomplish a feature. Always wrap components pulled in as dependencies to expose the API we explicitly want to support.

* Components dont’t accept arbitrary class names or styles, as these force you to expose significant portions of your components as part of their public API, and leads to fragile structures that are hard to change.

## Generalize progressively

An important extension of this rule is to only generalize a component as necessary. Generalization often goes hand-in-hand with making the domain covered by the feature more broad, which can lead to a more confusing API.

Additionally, you should match the level of sophistication of the API you expose to the nature of the feature you are implementing. Experimental features should avoid exposing too much API externally as this makes them harder to change. More mature systems (such as the shared Polaris components) should favor a stable API with more oversight that promotes consistency and resiliency.

Below are a few examples of decisions that demonstrate this specific application of the principle:

* Components should start their life in a feature-specific components folder, and should expose only the API required to handle their use case. If they prove to be useful in other use cases, they can be "promoted" to shared component folders. This often accompanies a larger and less domain-specific API, as the component needs to speak a language that makes sense across all consumers.

* Apply craft principles more loosely on experimental/ short-lived projects. As you work closer to the platform, you should seek to check off more of the quality boxes.
