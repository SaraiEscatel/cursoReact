import { combineReducers } from "redux";
import { filterReducers } from "./filterReducers";
import { todoReducers } from "./todoReducers";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  //state name: reducer that will control it
  todoState: todoReducers,
  filterState: filterReducers,
  userState: userReducer,
});
