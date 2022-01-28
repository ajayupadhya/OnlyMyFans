import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
// COMBINED REDUCERS
const reducers = {
  AuthReducer,
};

const Reducers = combineReducers(reducers);

export default Reducers;
