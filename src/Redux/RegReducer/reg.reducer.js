import * as types from "./reg.actionTypes";

const initialState = {
  userData: [],
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
