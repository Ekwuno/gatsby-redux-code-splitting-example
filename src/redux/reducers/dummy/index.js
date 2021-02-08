import reducerRegistry from '../../reducerRegistry'
import dummyData from "../../data/dummy.json"
// Imports expensive 3rd party library.
import nodeLibs from "node-libs-browser"

const initialState = {
  data: {},
  isLoaded: false,
}

const reducerName = 'dummyData'

const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_DATA = createActionName(LOAD_DATA);

export const loadData = isLoaded => ({
  type: LOAD_DATA,
  isLoaded,
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      // Set isLoaded value and attached expensive JSON file.
      return { ...state, data: dummyData, isLoaded: !state.isLoaded }
    default:
      return state
  }
}

reducerRegistry.register(reducerName, reducer);
