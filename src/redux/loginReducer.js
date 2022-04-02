import { LOGIN } from "./actions";
const initialState = {
  login: JSON.parse(localStorage.getItem("userlogin")) || "",
};
export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, login: payload };
    default:
      return store;
  }
};
