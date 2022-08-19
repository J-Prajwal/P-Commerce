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
        username: payload,
        userData: payload,
        token: payload,
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
