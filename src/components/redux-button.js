import React from "react"
import { connect } from "react-redux"
import { loadData } from "../redux/reducers/dummy"

const ReduxButton = ({ isLoaded, dummyData, dispatch }) => {
  return (
    <>
      <button
        className="button"
        onClick={() => dispatch(loadData(true))}
        style={
          isLoaded
            ? { backgroundColor: "#006ac1", color: "white" }
            : { backgroundColor: "#bc027f", color: "white" }
        }
      >
        {isLoaded
          ? "The data's set!"
          : "Fetch the data and set it in the store!"}
      </button>
      <div>
        {!dummyData && <div>No data in the store yet!</div>}
        {dummyData &&
          dummyData.length > 0 &&
          dummyData.map(item => <div key={item.name}>{item.name}</div>)}
      </div>
    </>
  )
}

export default connect(state => ({
  dummyData: state.dummy?.data,
  isLoaded: state.dummy?.isLoaded,
}))(ReduxButton)
