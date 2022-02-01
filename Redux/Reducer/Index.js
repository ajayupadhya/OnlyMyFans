import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import UserReducer from "./userReducer";
// COMBINED REDUCERS
const reducers = {
  AuthReducer,
  UserReducer,
};

const Reducers = combineReducers(reducers);

export default Reducers;
