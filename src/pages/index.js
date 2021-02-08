import React from "react"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReduxButton from "../components/redux-button"

import { toggleDarkMode } from "../redux/reducers/darkMode.js"
import { Link } from "gatsby"

const IndexPage = ({ isDarkMode, dispatch }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Link to="/">Go Home</Link>
      <br />
      <button
        // Simple dispatch works fine.
        style={isDarkMode ? { background: "black", color: "white" } : null}
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >
        Dark mode {isDarkMode ? "on" : "off"}
      </button>
      {/* More complex slice of the store handled in here. */}
      <ReduxButton />
    </Layout>
  )
}

export default connect(state => {
  return {
    isDarkMode: state.darkMode.isDarkMode,
  }
})(IndexPage)
