import { getItem } from "../../Utils/localStorage";
import * as types from "./auth.actionTypes";

const initialState = {
  username: getItem("user"),
  userData: [],
  token: getItem("token") || "",
  isAuth: getItem("token") ? true : false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case types.LOGIN_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.LOGOUT_USER: {
      return {
        ...state,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
