import * as types from "../actions/actionTypes";

const LoginUserReducer = (
  state = { user: "", isUserLogged: false },
  action
) => {
  switch (action.type) {
    case types.LOGIN_SUCCESSFUL:
      return { user: action.user, isUserLogged: true };
    default:
      return state;
  }
};

export default LoginUserReducer;
