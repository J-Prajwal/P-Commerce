import axios from "axios";
import * as types from "./auth.actionTypes";

export const getUserDataApi = () => (dispatch) => {
  dispatch({ type: types.GET_USERDATA_REQUEST });
  return axios
    .post("https://pcomm-api.herokuapp.com/users/login")
    .then((res) => {
      dispatch({ type: types.GET_USERDATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USERDATA_FAILURE });
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
  // dispatch({type: types})
};
