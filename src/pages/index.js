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
      <h2>A simple slice of the store for dark mode</h2>
      <button
        // Simple dispatch works fine.
        className="button dark-mode-button"
        style={
          isDarkMode ? { background: "rebeccapurple", color: "white" } : null
        }
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >
        Dark mode {isDarkMode ? "on" : "off"}
      </button>
      {/* More complex slice of the store handled in here. */}
      <h2>Data in the Redux store set dynamically</h2>
      <ReduxButton />
    </Layout>
  )
}

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
}))(IndexPage)
