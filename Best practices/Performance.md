# Performance

## Types of performance

There are many angles to consider when discussing web performance. For this guide, we’ll consider three broad categories of performance concerns:

* **Load performance**: how long the application takes to be ready for use after a full page navigation/ refresh (for example, when typing command+R, or directly entering a URL in the address bar).
* **Navigation performance**: how long the application takes to navigate between discrete tasks (for example, when clicking on a link in a single page app).
* **Interaction performance**: how smoothly the application responds to user input (for example, when dragging a UI element, or revealing content hidden behind some disclosure UI).

Developers will not have unlimited time to invest in optimizing all three of these. In rare cases, a choice requires you to optimize one of these at the expense of another. In order to choose which to prioritize, you need to understand the priorities and usage patterns of your users. Below are examples of how we typically prioritize these types of performance for different applications:

### Complex web applications: Interaction > Navigation > Load

This type of application is characterized by long sessions per use, multiple routes, and active (as opposed to passive) participation from the user, such as Shopify Web.

In this case, it is most important that users can interact with the application as if it were a native desktop or mobile app. Since users will navigate between many pages, navigation should feel fluid, and resources should be preloaded for likely navigation when possible. Load performance is least prioritized because users infrequently perform full navigation within the app.
