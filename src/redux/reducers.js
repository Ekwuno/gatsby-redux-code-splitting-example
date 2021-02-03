import { combineReducers } from "redux"
import app from "./reducers/app"

export default asyncReducers => combineReducers({ app, ...asyncReducers })
