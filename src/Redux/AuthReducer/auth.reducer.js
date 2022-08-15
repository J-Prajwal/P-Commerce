import * as types from "./auth.actionTypes";

const initialState = {
  userData: [],
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USERDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_USERDATA_SUCCESS: {
      return {
        ...state,
        userData: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_USERDATA_FAILURE: {
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
