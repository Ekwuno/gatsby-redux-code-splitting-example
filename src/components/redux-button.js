import React from "react"
import { connect } from "react-redux"
import store from "../redux/store"

const ReduxButton = ({ isLoaded, dummyData }) => {
  // Only load the expensive reducer and large data in to the store when this button is clicked.
  // Currently loads the dynamic data correctly on click in the network tab, but the local state of the component
  // does not reflect the state of the store. The 'connect' aspect doesn't seem to stay up to date after the new
  // reducer is injected.
  return (
    <>
      <button
        onClick={() => {
          // On click, load the reducer.
          import(
            /* webpackChunkName: "dummy" */ "../redux/reducers/dummy.js"
          ).then(({ loadData }) => {
            // Then run our expensive dispatch.
            store.dispatch(loadData())
          })
        }}
      >
        Is data loaded? {isLoaded ? "yes" : "no"}
      </button>
      <div>
        <h2>Data</h2>
        {!dummyData && <div>No data</div>}
        {dummyData &&
          dummyData.length > 0 &&
          dummyData.map(item => <div key={item.name}>{item.name}</div>)}
      </div>
    </>
  )
}

export default connect(state => {
  return {
    dummyData: state.dummyData?.data,
    isLoaded: state.dummyData?.isLoaded,
  }
})(ReduxButton)
