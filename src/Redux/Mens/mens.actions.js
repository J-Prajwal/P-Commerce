import * as types from "./mens.actionTypes";
import axios from "axios";
// import { getItem } from "../../Utils/localStorage";

export const mensData = (category) => (dispatch) => {
  dispatch({ type: types.GET_MENS_PRODUCT_REQUEST });
  return axios
    .get(`http://localhost:8080/mens?category=${category}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_MENS_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_MENS_PRODUCT_FAILURE });
    });
};
