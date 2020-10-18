import * as types from "../actions/actionTypes";

const UpdateTodoListReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_TODO_LIST:
      return action.list;
    case types.ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};

export default UpdateTodoListReducer;
