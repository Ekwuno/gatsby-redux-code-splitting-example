# Gatsby Redux Lazy Loading

The goal is to show an example of not just loading a slice of a Redux store when a component mounts, but when the user interacts with the site. In this case, there is an expensive reducer that:

- has a large 3rd party dependency
- imports a large JSON file and sets it in the store

Current state of the repo has removed it from the app and page bundles, and successfully only loads its vendor file and reducer file when the button is clicked.

Unfortunately, trying to read the state through the connected component does not work. The `mapStateToProps` only ever reflects the initial undefined state of the reducer that is dynamically injected on button click. So the button does not re-render and the updated `store` values are not reflected. However logging the `store` directly with `getStore` and `getState` does show the correct data, so it is being updated correctly under the hood.

![network tab](https://github.com/gatsby-inc/gatsby-redux-code-splitting-example/blob/main/static/screenshot.png)
