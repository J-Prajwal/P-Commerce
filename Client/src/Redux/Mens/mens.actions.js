import * as types from './mens.actionTypes';
import axios from 'axios';

export const mensData = (query) => (dispatch) => {
  dispatch({ type: types.GET_MENS_PRODUCT_REQUEST });
  return axios
    .get(`http://localhost:8080/mens?q=${query}`)
    .then((res) => {
      dispatch({ type: types.GET_MENS_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_MENS_PRODUCT_FAILURE });
    });
};

export const sortByPrice = (order) => (dispatch) => {
  if (order == 'high') {
    dispatch({ type: types.SORT_PRODUCTS_BY_PRICE_DESC });
  } else {
    dispatch({ type: types.SORT_PRODUCTS_BY_PRICE_ASC });
  }
};

export const sortByRating = (order) => (dispatch) => {
  if (order == 'highest') {
    dispatch({ type: types.SORT_PRODUCTS_BY_RATINGS_DESC });
  } else {
    dispatch({ type: types.SORT_PRODUCTS_BY_RATINGS_ASC });
  }
};
