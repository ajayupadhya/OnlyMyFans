import { SIGNUP } from "../constant";

const authReducer = {
  is_logged_in: false,
  pageStatus: "Sign Up",
  user: {},
};

const AuthReducer = (state = authReducer, action) => {
  switch (action) {
    case SIGNUP:
      return { ...state, user: action.payload, is_logged_in: true };

    default:
      return state;
  }
};

export default AuthReducer;
