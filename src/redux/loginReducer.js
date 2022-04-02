import { LOGIN } from "./actions";
const initialState = {
  login:localStorage.getItem("userlogin") || "",
};
export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {login: payload };
    default:
      return store;
  }
};
