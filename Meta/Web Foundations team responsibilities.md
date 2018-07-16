# Web Foundation team responsibilities

The Web Foundation team at Shopify is responsible for stewarding our approach to building web applications. It is important to note, however, that stewardship is the most apt description of the team’s role; it is not meant to dictate or police, particularly where doing so would interfere with another team being able to deliver their target experience.

There are a few areas where the Web Foundation team takes a particularly prominent role. This document outlines these areas, as well as how the Web Foundation team decides on the degree of its involvement.

## Language and platform experts

While we expect all Web and UX Developers at Shopify to have a solid understanding of the web platform and associated technologies, the Web Foundation team is meant to serve as a consistent group of experts in these technologies that can assist other teams in addressing the Web, irrespective of the expertise they have on their own team. The Web Foundation team promises to maintain a modern and thorough understanding of the following:

* JavaScript (and variants in common use at Shopify, such as TypeScript)
* Sass and CSS
* HTML
* DOM and other browser APIs
* Node
* GraphQL
* Frameworks and libraries in common use at Shopify, such as React and Koa

Given this broad expertise in the platform and technologies of the Web, the Web Foundation team act as the stewards for our code style guides and the shared linting/ formatting configurations derived from these style guides. The Web Foundation team will, when necessary, break deadlocks in bike shedding around the stylistic use of the above technologies.

Additionally, the Web Foundation team should be at least a "keep informed" stakeholder on any project that involves a key extension or change to our typical process of developing for the Web, and for any project that involves significant and novel use of Web technologies not done elsewhere in Shopify.

## Stewards of common tools, libraries, and best practices

At Shopify, we do not believe that every project should have completely free-reign in deciding their product’s tech stack. We expect projects to use our common developer tools, deploy systems, and production environments. We also make "picks" at higher levels in the stack that we believe are better served by consistency than developer choice, such as our preference for Rails as an application framework, or our preference for MySQL as the primary data store. These choices are often made in an effort to provide a minimum level of quality from all the products we create.

The Web Foundation team applies this same principle of having sensible "picks" to developer tools, application libraries, and best practices specific to the Web platform. However, we are mindful of not creating "thin clients" — that is, leaving no decisions to application teams about what their application should look like.

It is useful to consider the separation of powers between federal and provincial governments, as this is a similar model to how the Web Foundation team considers topics in which to involve themselves. In Canada, the federal government delegates the responsibility for overseeing schools, hospitals, and property rights to provincial governments, while retaining powers that they are best positioned to address, such as national defence and currency. Similarly, the Web Foundations team is responsible for guiding decisions on topics that are important for all applications, but delegates most of the finer points to application teams.

### Criteria for Web Foundation involvement

The above description can be seen as overly broad, so the Web Foundation team uses the following criteria in deciding whether it should take a role in deciding best practices or preferred tools for a particular topic.

The following criteria must **always** be met for the Web Foundation team to get involved:

* It **must not** interfere with a team’s ability to deliver value to their user. This has two implications:
  1. The Web Foundation team only builds and maintains libraries that are either non-visual for the end user, or which operate in line with our design system, Polaris.
  2. Any team feeling that our recommended best practices or libraries prevent them from being capable of delivering a user-facing feature should ignore the recommendation and bring this up with us.
* It **must** be a topic that affects a majority of applications. The Web Foundation team will not build libraries for that benefit only a small handful of projects.
* It **must not** be a topic that has universal consensus in the industry.

**At least one** of the following criteria must also be met for the Web Foundation team to get involved:

* It affects a key aspect of the user experience (performance, accessibility, etc) and is difficult for a typical developer to adequately address.
* It has a material impact on the scalability of an application.
* It spans multiple layers of the stack, most notably when it is a problem that has implications for build and runtime.
* It involves a connection to a shared foundational technology between mobile and web, most notably to Polaris and GraphQL.

### Application of involvement

With these criteria in mind, the Web Foundations team is responsible for: 

* **Build.** The build process for applications has an important impact on performance, as ineffective splitting and loading of assets can delay interactivity. Asynchronous loading of code also requires coordination of tooling, server, and client code. We consolidate our build tooling in [sewing-kit](https://github.com/Shopify/sewing-kit).
* **Testing.** Testing is a key part of creating a scalable application that can be effectively shared/ transferred between developers. We provide recommendations on testing tools and best practices in this repo, and include a solid default testing experience in [sewing-kit](https://github.com/Shopify/sewing-kit).
* **GraphQL.** GraphQL is vitally important to all applications at Shopify. In order to maintain a consistent approach between clients across platforms, the Web Foundation team coordinates its best practices and tooling with those of the mobile foundation team. Handling GraphQL effectively also involves tight integration with build, test, and type checking/ linting. We collect our GraphQL tooling in [graphql-tools-web](https://github.com/Shopify/graphql-tools-web), and provides an excellent default experience for GraphQL in [sewing-kit](https://github.com/Shopify/sewing-kit).

These responsibilities are summarized in the diagram below.

<figure>
  <img src="./images/Responsibilities%20-%20Shopify.png" alt="Web Foundation responsibilities for Shopify" />
  <figcaption>A summary of components that the Web Foundation team is responsible for (the bottom four layers, highlighted in blue)</figcaption>
</figure>

## Maintenance of foundational piece of Shopify Web

![Web Foundation responsibilities for Shopify Web](./images/Responsibilities%20-%20Web.png)
