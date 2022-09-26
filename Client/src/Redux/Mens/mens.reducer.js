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
    default: {
      return state;
    }
  }
};
