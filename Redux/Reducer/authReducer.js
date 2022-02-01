import { SIGNUP, LOGIN, SIGNOUT } from "../constant";

const authReducer = {
  is_logged_in: false,
  pageStatus: "Sign Up",
  user: {},
};

const AuthReducer = (state = authReducer, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, user: action.payload, is_logged_in: true };
    case LOGIN: {
      return { ...state, user: action.payload, is_logged_in: true };
    }

    case SIGNOUT:
      return { ...state, is_logged_in: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
