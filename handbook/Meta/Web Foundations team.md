# Web Foundations team

The Web Foundations team at Shopify is responsible for stewarding our approach to building web applications. It is important to note, however, that stewardship is the most apt description of the team’s role; it is not meant to dictate or police, particularly where doing so would interfere with another team being able to deliver their target experience.

## Responsibilities

There are a few areas where the Web Foundations team takes a particularly prominent role. This section outlines these areas, as well as how the Web Foundations team decides on the degree of its involvement.

### Language and platform experts

While we expect all Web and UX Developers at Shopify to have a solid understanding of the web platform and associated technologies, the Web Foundations team is meant to serve as a consistent group of experts in these technologies that can assist other teams in addressing the Web, irrespective of the expertise they have on their own team. The Web Foundations team promises to maintain a modern and thorough understanding of the following:

* JavaScript (and variants in common use at Shopify, such as TypeScript)
* Sass and CSS
* HTML
* DOM and other browser APIs
* Node
* GraphQL
* Frameworks and libraries in common use at Shopify, such as React and Koa

Given this broad expertise in the platform and technologies of the Web, the Web Foundations team act as the stewards for our code style guides and the shared linting/formatting configurations derived from these style guides. The Web Foundations team will, when necessary, break deadlocks in bike shedding around the stylistic use of the above technologies.

Additionally, the Web Foundations team should be at least a "keep informed" stakeholder on any project that involves a key extension or change to our typical process of developing for the Web, and for any project that involves significant and novel use of Web technologies not done elsewhere in Shopify.

### Stewards of common tools, libraries, and best practices

At Shopify, we do not believe that every project should have completely free-reign in deciding their product’s tech stack. We expect projects to use our common developer tools, deploy systems, and production environments. We also make "picks" at higher levels in the stack that we believe are better served by consistency than developer choice, such as our preference for Rails as an application framework, or our preference for MySQL as the primary data store. These choices are often made in an effort to provide a minimum level of quality from all the products we create.

The Web Foundations team applies this same principle of having sensible "picks" to developer tools, application libraries, and best practices specific to the Web platform. However, we are mindful of not creating "thin clients" — that is, leaving no decisions to application teams about what their application should look like.

#### Criteria for Web Foundations involvement

The above description can be seen as overly broad, so the Web Foundations team uses the following criteria in deciding whether it should take a role in deciding best practices or preferred tools for a particular topic.

The following criteria must **always** be met for the Web Foundations team to get involved:

* It **must not** interfere with a team’s ability to deliver value to their user. This has two implications:
  1. The Web Foundations team only builds and maintains libraries that are either non-visual for the end user, or which operate in line with our design system, Polaris.
  2. Any team feeling that our recommended best practices or libraries prevent them from being capable of delivering a user-facing feature should ignore the recommendation and bring this up with us.
* It **must** be a topic that affects a majority of applications. The Web Foundations team will not build libraries that benefit only a small handful of projects; our work typically impacts at least 80% of merchants or internal developers.
* It **must not** be a topic that has universal consensus in the industry.

**At least one** of the following criteria must also be met for the Web Foundations team to get involved:

* It affects a key aspect of the user experience (performance, accessibility, etc) and is difficult for a typical developer to adequately address.
* It has a material impact on the scalability of an application.
* It spans multiple layers of the stack, most notably when it is a problem that has implications for build and runtime.
* It involves a connection to a shared foundational technology between mobile and web, most notably to Polaris and GraphQL.
* It requires tight integration with another "foundational" team at Shopify.

#### Concrete responsibilities

With these criteria in mind, the Web Foundations team is responsible for: 

* **Deploy and development infrastructure.** To provide an excellent developer experience, JavaScript/ Node dependencies must be easy to install, publish, and deploy. The Web Foundations team maintains the integrations with core developer acceleration and production engineering tools like `dev` and `shipit` which enable the same development flow for JavaScript as for other "blessed" languages at Shopify.
* **Build.** The build process for applications has an important impact on performance, as ineffective splitting and loading of assets can delay interactivity. Asynchronous loading of code also requires coordination of tooling, server, and client code. We consolidate our build tooling in [sewing-kit](https://github.com/Shopify/sewing-kit).
* **Testing.** Testing is a key part of creating a scalable application that can be effectively shared/ transferred between developers. We provide recommendations on testing tools and best practices in this repo, and include a solid default testing experience in [sewing-kit](https://github.com/Shopify/sewing-kit).
* **GraphQL.** GraphQL is vitally important to all applications at Shopify. In order to maintain a consistent approach between clients across platforms, the Web Foundations team coordinates its best practices and tooling with those of the mobile foundation team. Handling GraphQL effectively also involves tight integration with build, test, and type checking/ linting. We collect our GraphQL tooling in [graphql-tools-web](https://github.com/Shopify/graphql-tools-web), and provides an excellent default experience for GraphQL in [sewing-kit](https://github.com/Shopify/sewing-kit).
* **Polaris.** The quality of the Web implementation of Polaris needs to be extraordinarily high, as any inadequacies are magnified by the number of applications that rely on Polaris for their core UI. The Web Foundations team does not directly maintain Polaris, but it works closely with the dedicated Polaris team to ensure that Polaris is optimized through [sewing-kit](https://github.com/Shopify/sewing-kit).
* **Common application libraries.** We maintain many additional libraries around our core technology picks that address common application needs. These libraries provide excellent default solutions and reduce the need for application developers to reinvent the wheel on every project, particularly where doing so effectively can be difficult, as it is in the case of forms, i18n, API authentication, and more. These libraries are included in the [quilt monorepo](https://github.com/Shopify/quilt).

These responsibilities are summarized in the diagram below.

<figure>
  <img src="./images/Responsibilities%20-%20Shopify.png" alt="Web Foundations responsibilities for Shopify" />
  <figcaption>A summary of components that the Web Foundations team is responsible for (the bottom four layers, highlighted in blue). Note that Polaris is listed as a responsibility of the Web Foundations team given its importance in our approach to building web apps, but its maintenance and evolution are handled by the dedicated Polaris team.</figcaption>
</figure>

### Maintenance of foundational piece of Shopify Web

One problem that can arise from focusing on foundational technologies is that we can lose perspective on the applications we seek to serve. Our involvement with Shopify Web, the largest application using the technologies we are stewarding, seeks to address this issue.

Through applying our tools and libraries to Shopify Web, we can ensure they work well in practice, and that they scale to our largest applications. This provides us with confidence that they will work for other applications. Through ownership of some foundational elements of Shopify Web, we can discover pain points that may indicate missing or inadequate tools.

There are three primary areas of Shopify Web that the Web Foundations team takes care of:

* **Key dependencies.** We will ensure that Shopify Web stays up to date with key libraries like React, TypeScript, and Apollo. This forces us to ensure our tools built on top of these libraries continue to work for modern versions, and prevents us from holding other applications back from upgrading these dependencies in their own application.
* **Infrastructure.** This includes everything from CI (to ensure that `sewing-kit` commands scale to our largest apps) and our server/ authentication (as these are very complex, and our team has the most expertise with Node).
* **Foundation components.** All components in `app/foundation` are key to the functioning of our application, and span across more than any one section is responsible for. This is also where many of our context providers exist, which are typically broken out into shared libraries that allow many applications to benefit from them.

These responsibilities are summarized in the following diagram:

![Web Foundations responsibilities for Shopify Web](./images/Responsibilities%20-%20Web.png)

## How we build

We strive to achieve the following in everything we build:

* **Open by default.** By the definition of our responsibilities above, the Web Foundations team does not typically deal with layers of an application that must be kept secret. As much as possible, we want to share our tools, techniques, and learnings with the outside development community.
* **Minimize barrier to entry.** "Stewards, not dictators" can ring hollow if our projects make it impossible for members of other teams to contribute in whatever capacity they can manage. We will work to make sure it is easy to understand what contributions we are looking for. We will provide generators, documentation, and one-on-one chats that help developers find where to make those changes. Finally, we will endeavour to make it easy for developers to provide feedback on our tools and approaches, even if they are unable to directly contribute themselves.
* **Best examples of our best practices.** A developer at Shopify should be able to look at the codebases we maintain and never experience cognitive dissonance with the guidelines we’ve presented. That means that every codebase is well tested, follows the same linting and formatting rules, and is architected in a way that is consistent with our [principles](../Principles). We maintain the foundational technology that is frequently used as an example other developers will follow, and so we hold ourselves to the highest standard of quality.
* **The right way, not the fast way.** Sometimes, we will find challenges that indicate we may need larger refactors, potentially even to sibling projects. While a product team at Shopify might rightfully choose to take a scrappier approach, we will always opt for making the foundation we’ve built stronger, not weaker.
