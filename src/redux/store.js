import { createStore } from "redux";
import { cartReducer } from "./reducer";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("store.getState", store.getState());
