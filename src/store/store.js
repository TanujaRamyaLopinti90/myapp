import { combineReducers,createStore } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
var store=createStore(combineReducers({counter:counterReducer,todolist:todoReducer}))
export default store 