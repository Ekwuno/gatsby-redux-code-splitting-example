import React from "react"
import { connect } from "react-redux"
import store from "../redux/store"

const ReduxButton = ({ isLoaded, dummyData }) => {
  // Only load the expensive reducer and large data in to the store when this button is clicked.
  // Currently loads the dynamic data correctly on click in the network tab, but the local state of the component
  // does not reflect the state of the store. The 'connect' aspect doesn't seem to stay up to date after the new
  // reducer is injected.

  console.log({ isLoaded });

  return (
    <button
      onClick={() => {
        // On click, load the reducer.
        const dummy = import(
          /* webpackChunkName: "dummy" */ "../redux/reducers/dummy"
        ).then(({ default: dummy, loadData }) => {
          // Then run our expensive dispatch.
          store.dispatch(loadData())
        })
      }}
    >
      {/* Trying to read the store from 'connect', but doesn't rerender and stays undefined. */}
      Is data loaded? {isLoaded ? 'yes' : 'no'}
    </button>
  )
}

export default connect(state => {
  console.log({ state })

  return ({
    dummyData: state.dummyData?.data,
    isLoaded: state.dummyData?.isLoaded
  })
}
)(ReduxButton)
