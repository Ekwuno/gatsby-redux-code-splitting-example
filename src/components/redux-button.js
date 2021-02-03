import React from "react"
import { connect } from "react-redux"
import getStore from "../redux/store"

// Load the store.
const store = getStore()

const ReduxButton = ({ dummyData }) => {
  // Only load the expensive reducer and large data in to the store when this button is clicked.
  // Currently loads the dynamic data correctly on click in the network tab, but the local state of the component
  // does not reflect the state of the store. The 'connect' aspect doesn't seem to stay up to date after the new
  // reducer is injected.
  return (
    <button
      onClick={() => {
        // On click, load the reducer.
        const dummyReducer = import(
          /* webpackChunkName: "dummyReducer" */ "../redux/reducers/dummy"
        ).then(({ default: dummyReducer, loadData }) => {
          // Then add the new dynamic reducer to the store.
          store.injectReducer("dummyData", dummyReducer)
          // Then run our expensive dispatch.
          store.dispatch(loadData(true))
        })
      }}
    >
      {/* Trying to read the store from 'connect', but doesn't rerender and stays undefined. */}
      Load Data {dummyData?.isLoaded ? "on" : "off"}
    </button>
  )
}

export default connect(state => ({
  dummyData: state.dummyData?.data,
}))(ReduxButton)
