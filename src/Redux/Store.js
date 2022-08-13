import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { reducer as authReducer } from "./AuthReducer/auth.reducer";
import { reducer as appReducer } from "./AppReducer/app.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ authReducer, appReducer });

export const Store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
