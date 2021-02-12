import React from "react"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReduxButton from "../components/redux-button"

import { toggleDarkMode } from "../redux/reducers/app"

const IndexPage = ({ isDarkMode, dispatch }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <br />
      <p>
        This example shows using a traditional Redux architecture to attach all
        reducers at the root. This can result in a app bundle in Gatsby that
        includes large amounts of code that are never used. A reducer's code{" "}
        <i>and its dependencies</i> end up in the bundle whether they are used
        or not. To see the code-splitting example that only loads the reducers
        as you need them,{" "}
        <a href="https://gatsbyreduxcodesplittingexampl.gtsb.io/">go here</a>.
      </p>
      <div className="container">
        <div>
          <h2>A simple slice of the store for dark mode</h2>
          <p>This is a boolean value that does not:</p>
          <ul>
            <li>make any API calls</li>
            <li>have large external dependencies </li>
            <li>require large data sets</li>
          </ul>
          <p>
            Putting it in our global store has little effect on our bundle size.
          </p>
          <button
            // Simple dispatch works fine.
            className="button dark-mode-button"
            style={
              isDarkMode
                ? { background: "rebeccapurple", color: "white" }
                : null
            }
            onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
          >
            Dark mode {isDarkMode ? "on" : "off"}
          </button>
        </div>
        <div>
          {/* More complex slice of the store handled in here. */}
          <h2>Data in the Redux store set dynamically</h2>
          <p>This reducer has:</p>
          <ul>
            <li>large external dependencies</li>
            <li>sets a large data set in to the store</li>
          </ul>
          <p>
            Watch the network tab when the page loads and see the data and
            dependencies loaded before the user clicks the button. Wasteful!
          </p>
          <ReduxButton />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
}))(IndexPage)
