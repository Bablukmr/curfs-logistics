// import { combineReducers } from "redux";
import * as types from "./actionTypes";

const initialAuthState = {
  // username: null,
  token: null,
  loadingLogin: false,
  loginError: false,
  // userId: null,
  // userData: {},
  // globals: null,
  // favouriteMenus: null,
  // urlToGo: null,
  // messages: [],
  // newMessage: null,
  // session: null,
};

const AuthReducer = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case types.USER_DETAIL:
      return {
        ...state,
        token: payload.token,
        loadingLogin: payload.loadingLogin,
        loginError: payload.loginError,
      };

    default:
      return state;
  }
};

export default AuthReducer;
