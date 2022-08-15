import axios from "axios";
import * as types from "./auth.actionTypes";

export const getUserDataApi = () => (dispatch) => {
  dispatch({ type: types.GET_USERDATA_REQUEST });
  return axios
    .get("https://40d8hv.sse.codesandbox.io/users")
    .then((res) => {
      dispatch({ type: types.GET_USERDATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USERDATA_FAILURE });
    });
};
