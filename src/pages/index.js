import { Link } from "gatsby"
import React from "react"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { toggleDarkMode } from "../redux/reducers/darkMode/index"

const IndexPage = ({ isDarkMode, dispatch }) => {
  return (
    <Layout>
      <Link to="/async">Go to Async</Link>
      <br />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <button
        // Simple dispatch works fine.
        style={isDarkMode ? { background: "black", color: "white" } : null}
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >
        Dark mode {isDarkMode ? "on" : "off"}
      </button>
    </Layout>
  )
}

export default connect(state => {
  console.log({ state });
  return ({
    isDarkMode: state.darkMode.isDarkMode,
  })
})(IndexPage)
