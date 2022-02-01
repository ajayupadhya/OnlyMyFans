import { USER_DATA, SIGNOUT } from "../constant";

const userReducer = {
  user_data: {},
};

const UserReducer = (state = userReducer, action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, user_data: action.payload };
    case SIGNOUT:
      return userReducer;
    default:
      return state;
  }
};

export default UserReducer;
