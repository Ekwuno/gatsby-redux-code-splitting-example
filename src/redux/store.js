import { createStore } from "redux"
import reducers from "./reducers"

// Configure the store
export default function configureStore(initialState) {
  const store = createStore(reducers(), initialState)

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(reducers(store.asyncReducers))
  }

  // Return the modified store

  return store
}
