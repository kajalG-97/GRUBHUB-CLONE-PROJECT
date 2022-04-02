import { LOGIN } from "./actions";
const initialState = {
  login: "Kajal",
};
export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { login: payload };
    default:
      return store;
  }
};
