import * as types from "./mens.actionTypes";
import axios from "axios";
import { getItem } from "../../Utils/localStorage";

export const mensData = () => (dispatch) => {
  dispatch({ type: types.GET_MENS_PRODUCT_REQUEST });
  return axios
    .get("https://pcomm-api.herokuapp.com/mens", {
      headers: {
        Authorization: "Bearer " + getItem("token"),
      },
    })
    .then((res) => {
      dispatch({ type: types.GET_MENS_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_MENS_PRODUCT_FAILURE });
    });
};
