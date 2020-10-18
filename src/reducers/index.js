import { combineReducers } from "redux";
import LoginUserReducer from "./loginuser";
import UpdateTodoListReducer from "./todoList";

export default combineReducers({
  LoginUserReducer,
  UpdateTodoListReducer,
});
