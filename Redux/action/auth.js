import { SIGNUP, LOGIN, SIGNOUT } from "../constant";
import secureStorage from "../../helper/secureStorage";
import { AXIOS } from "../../helper/axiosHelper";

export const signUpAction = (name, email, password) => async (dispatch) => {
  let body = {
    name,
    email,
    password,
  };

  try {
    const { data } = await AXIOS.post("/user", body, {
      headers: { Authorization: null },
    });
    const { results, token } = data;
    secureStorage.setItem("token", token);
    // let results = { name: "test", email: "test@gmail.com", password: "123456" };
    dispatch({ type: SIGNUP, payload: results });
  } catch (error) {
    console.log(error);
  }
};

export const loginAction = (email, password) => async (dispatch) => {
  let body = {
    email,
    password,
  };

  try {
    const { data } = await AXIOS.post("/user/login", body, {
      headers: { Authorization: null },
    });
    const { results, token } = data;
    secureStorage.setItem("token", token);
    dispatch({ type: LOGIN, payload: results });
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => async (dispatch) => {
  secureStorage.removerItem("token");
  dispatch({ type: SIGNOUT, payload: false });
};
