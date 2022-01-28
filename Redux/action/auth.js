import { SIGNUP } from "../constant";
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
    console.log(results);
    secureStorage.setItem("token", token);
    dispatch({ type: SIGNUP, payload: results });
  } catch (error) {
    console.log(error);
  }
};
