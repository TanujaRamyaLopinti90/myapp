import counterReducer from './reducers/counter';
import todoReducer from './reducers/todos';

import { combineReducers,createStore } from "redux";
var reducer=combineReducers({counter:counterReducer,todolist:todoReducer})
var store=createStore(reducer)
export default store