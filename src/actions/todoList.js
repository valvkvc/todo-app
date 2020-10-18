import Api from "../lib/api";
import * as types from "./actionTypes";

function getTodoList() {
  return async (dispatch, getState) => {
    let response = await Api.get("http://localhost:8080/api/todo");
    dispatch({
      type: types.GET_TODO_LIST,
      list: response.list,
    });
  };
}

function addTodo(data) {
  console.log(data);
  return async (dispatch, getState) => {
    let response = await Api.postFormData(
      "http://localhost:8080/api/todo",
      data
    );
    dispatch({
      type: types.ADD_TODO,
      todo: response.todo,
    });
  };
}

export { getTodoList, addTodo };
