# We will use Apollo as our GraphQL client

## Date

March 28, 2017

## Contributors

- Chris Sauve
- Mallory Allen
- Utkarsh Saxena

## Summary

We use Apollo client to connect to our GraphQL servers. Apollo provides an efficient, flexible way of interacting with GraphQL. We accept that Relay is more likely to seamlessly integrate with React in the future. However, uncertainty in Relay's API future makes it a tough sell to use today. In contrast, Apollo provides value, portability, and tooling immediately.

## Problem space

Our mobile app team has had success with GraphQL. Our engineering teams are now adopting GraphQL across the organization. We want to ensure our UI architecture can take advantage of this shift.

To enable us to use GraphQL for all data fetching in the application we need an architecture that lets us:

- Perform queries and mutations related to a component without much boilerplate
- Fetch data for the current route only
- Run on the server and the client
- Integrate well with other frameworks in use
- Perform optimistic updates
- Provide a custom network interface (to forward API calls to Core)

There are also a few things that are "nice to have" but not strictly required:

- Results from GraphQL are automatically typed based on the GraphQL schema
- Can get compile-time warnings for invalid queries and mutations
- Tooling for inspecting the currently fetched queries during development
- Good handling of loading and error cases

## Solution

For GraphQL clients, particularly when it comes to React, there are two main choices:

- [Relay](https://facebook.github.io/relay/)
- [Apollo](http://dev.apollodata.com/)

Relay does a better job of understanding our GraphQL schema out of the box. It is supported by Facebook, but has a v1 on the horizon with uncertain API changes. Apollo is more actively developed and provides better tooling. Its general purpose design means that it will probably adapt better to potential future changes to our architecture, but will need more boilerplate than Relay.

The API stability question for Relay is significant enough that we would not feel comfortable recommending it now. Aditionally, its progression has been slower and it does not integrate with other tools as well as Apollo. For the time being, Apollo is the right choice for new projects.

[An in-depth overview of both tools can be found here](https://docs.google.com/a/shopify.com/document/d/1GuIarzEPNPPFpws7-ltR28kttzhtRCTWWt-WbmOxQNY/edit?usp=sharing).
