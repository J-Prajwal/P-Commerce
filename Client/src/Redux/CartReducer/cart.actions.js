import * as types from "./cart.actionTypes";
import axios from "axios";

export const getCartItems = () => (dispatch) => {
  dispatch({ type: types.GET_CART_ITEMS_LOADING });
  return axios
    .get("http://localhost:8080/cart")
    .then((res) => {
      dispatch({ type: types.GET_CART_ITEMS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_ITEMS_ERROR, payload: err });
    });
};

export const addCartItems = (payload) => (dispatch) => {
  return axios.post("http://localhost:8080/cart/new", payload).then((res) => {
    dispatch({ type: types.REMOVE_CART_ITEMS });
    return true;
  });
};

export const deleteCartItems = (id) => (dispatch) => {
  dispatch({ type: types.REMOVE_CART_ITEMS_LOADING });
  return axios
    .delete(`http://localhost:8080/cart/${id}`)
    .then((res) => {
      dispatch({ type: types.REMOVE_CART_ITEMS_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.REMOVE_CART_ITEMS_FAILURE });
    });
};
