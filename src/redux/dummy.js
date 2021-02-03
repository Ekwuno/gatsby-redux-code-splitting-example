import dummyData from "./dummy.json"
import nodeLibs from "node-libs-browser"

const initialState = {
  data: {},
}

const LOAD_DATA = "LOAD_DATA"

export const loadData = () => ({
  type: LOAD_DATA,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, data: dummyData }
    default:
      return state
  }
}
