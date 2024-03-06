import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import studentReducer from "./student.reducer";
import { combineReducers } from "redux";

var reducer=combineReducers({
  counter :counterReducer,
  todos:todoReducer,
  students:studentReducer
})

export default  reducer

