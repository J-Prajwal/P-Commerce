import * as types from "./cart.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  cartItems: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.GET_CART_ITEMS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        cartItems: payload,
      };
    }
    case types.GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
