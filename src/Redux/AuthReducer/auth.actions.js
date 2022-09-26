import axios from "axios";
import { removeItem, setItem } from "../../Utils/localStorage";
import * as types from "./auth.actionTypes";

export const loginUser = (creds) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });
  return axios
    .post("http://localhost:8080/users/login", creds)
    .then((res) => {
      if (res.data.message == "Login Successful!") {
        console.log(res.data);
        const username = res.data.user.name.split(" ")[0];
        setItem("token", res.data.token);
        setItem("username", username);
        dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data.token });
        return true;
      } else {
        removeItem("token");
        removeItem("username");
        dispatch({ type: types.LOGIN_USER_FAILURE });
        return false;
      }
    })
    .catch((err) => {
      removeItem("token");
      removeItem("username");
      dispatch({ type: types.LOGIN_USER_FAILURE });
    });
};

export const registerUser = (userData) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  return axios
    .post("http://localhost:8080/users/register", userData)
    .then((res) => {
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
      return true;
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_USER_FAILURE });
      return false;
    });
};

export const logoutUserApi = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_USER });
};
