# We use React ecosystem as our framework

## Date

March 28, 2017

## Contributors

- Chris Sauvé
- Mathew Allen
- Utkarsh Saxena

## Summary

We use React as the foundation of our new UI architecture. This improves developer efficiency, performance, and helps us build for the long-term. We understand that the lifecycle for JavaScript frameworks are short. The benefits outweigh the risk associated with coupling our architecture to React.

## Problem space

The UI architecture at Shopify is ready for modernization. We decided it was time to address the [the foundational problems associated with the Admin Next architecture](https://docs.google.com/document/d/1Z2lYsfX3oxytG4QNGaW6X83Z52Zz-jsrUFXp1zRGVpA/edit):

- Load performance is not great
- Interaction performance is not great
- The technical stack is complicated and requires multiple languages
- Our conventions do not promote clean, reusable, and testable code
- The overall developer experience could be improved

We decided we needed it was important for us to make a change. In doing so, we wanted to ensure we:

- Increase developer efficiency
- Improve end-user performance
- Provide more opinionated conventions to promote consistency
- Can easily leverage Shopify's success with GraphQL
- Are able to attract and retain top talent

## Solution

We evaluated four main options:

- [React](https://facebook.github.io/react/)
- [Vue](https://vuejs.org/)
- [Webcomponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components) (particularly with [Polymer](https://www.polymer-project.org/1.0/))
- Improvements to [Twine](https://github.com/Shopify/twine) and [Turbograft](https://github.com/Shopify/turbograft)

We feel that React and Vue are both excellent choices for complex web UI projects today. They both offer excellent performance, developer experience, and conventions. React has stronger GraphQL tooling, a larger community, a larger hiring pool, and a larger team maintaining it. These factors solidified that React is the right solution for Shopify.

Many documents were prepared as part of this decision. Some of the most important ones are:

- [Exploration scorecard](https://docs.google.com/spreadsheets/d/1vn4xwTcXhuiD__Opxupahf55zDZEqJ5kswZODlmLhCU/edit#gid=0)
- [React exploration](https://docs.google.com/document/d/1Er44SPruAt_MYTcWEoHtmzUbgbpk3LsLcFw_avIglPY/edit#heading=h.f2tkwvxd2erv)
- [Vue exploration](https://docs.google.com/document/d/1y8OgERPk74t25OuRQO93H34irZqdoiIhJstKrTGFyTk/edit)
- [Webcomponents and Polymer exploration](https://docs.google.com/document/d/1QM8AoWQgn-2b5aMVduy6gWP4vZiJeBPioIvB4nneHQo/edit)
- [Twine and Turbograft exploration](https://docs.google.com/document/d/1b-An6ImewQq4WChIBQDC4xLhFwi1LJodCTsrN2rpfVU/edit#heading=h.f2tkwvxd2erv)

Moving to React brings with it more moving parts. This increases the complexity of the application over its Rails-based counterpart. We believe that the benefits to developer experience, hiring pool, and performance outweigh this.

We also acknowledge that, in general, the JavaScript landscape is evolving at a rapid pace. We accept the risk that something better suited than React emerges in the next few years. However, we believe that the React ecosystem is well poised for longevity. It is backed by a large company that is committed to moving the project forward and there is a vibrant community actively building tooling.
