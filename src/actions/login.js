import Api from "../lib/api";
import * as types from "./actionTypes";
import { getTodoList } from "./todoList";

function login(username, password) {
  return async (dispatch, getState) => {
    let response = await Api.post("http://localhost:8080/api/signin", {
      username,
      password,
    });

    if (response && response.token) {
      localStorage.setItem("token", response.token);
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        user: response.user.username,
      });

      dispatch(getTodoList());
    }
  };
}

export { login };
