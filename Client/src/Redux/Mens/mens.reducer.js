import * as types from "./mens.actionTypes";

const initialState = {
  mens: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MENS_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_MENS_PRODUCT_SUCCESS: {
      return {
        ...state,
        mens: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_MENS_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.SORT_PRODUCTS_BY_PRICE_ASC: {
      return {
        ...state, mens: state.mens.sort((a, b) => a.cost - b.cost)
      }
    }
    case types.SORT_PRODUCTS_BY_PRICE_DESC: {
      return {
        ...state, mens: state.mens.sort((a, b) => b.cost - a.cost)
      }
    }
    case types.SORT_PRODUCTS_BY_RATINGS_ASC: {
      return {
        ...state, mens: state.mens.sort((a, b) => a.rating - b.rating)
      }
    }
    case types.SORT_PRODUCTS_BY_RATINGS_DESC: {
      return {
        ...state, mens: state.mens.sort((a, b) => b.rating - a.rating)
      }
    }
    default: {
      return state;
    }
  }
};
