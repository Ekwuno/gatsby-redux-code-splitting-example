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

      <button
        // Simple dispatch works fine.
        style={isDarkMode ? { background: "black", color: "white" } : null}
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >
        Dark mode {isDarkMode ? "on" : "off"}
      </button>
      <ReduxButton />
    </Layout>
  )
}

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
}))(IndexPage)
