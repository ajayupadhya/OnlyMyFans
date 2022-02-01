import { USER_DATA } from "../constant";
import secureStorage from "../../helper/secureStorage";
import { AXIOS } from "../../helper/axiosHelper";

export const getUserData = () => async (dispatch) => {
  try {
    if (secureStorage.getItem("token")) {
      console.log(secureStorage.getItem("token"));
      const { data } = await AXIOS.post(
        "/user/auth",
        { token: secureStorage.getItem("token") },
        {
          headers: { Authorization: null },
        }
      );
      const { results, token } = data;

      dispatch({ type: USER_DATA, payload: results });
    }
  } catch (error) {
    console.log(error);
  }
};
