import axios from "axios";
import { removeItem, setItem } from "../../Utils/localStorage";
import * as types from "./auth.actionTypes";

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });
  return axios
    .post("https://pcomm-api.herokuapp.com/users/login", payload)
    .then((res) => {
      const username = res.data.user.name.split(" ")[0];
      setItem("token", res.data.token);
      setItem("username", username);
      alert("Login Success!");
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      removeItem("token");
      removeItem("username");
      alert("Invalid Credentials!")
      dispatch({ type: types.LOGIN_USER_FAILURE });
    });
};

export const registerUser = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  return axios
    .post("https://pcomm-api.herokuapp.com/users/register", payload)
    .then((res) => {
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_USER_FAILURE });
    });
};

export const logoutUserApi = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_USER });
};
