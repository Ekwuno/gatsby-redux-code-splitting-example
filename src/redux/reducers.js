import { combineReducers } from "redux"
import app from "./reducers/app"
import dummy from "./reducers/dummy"

export default combineReducers({ app, dummy })
