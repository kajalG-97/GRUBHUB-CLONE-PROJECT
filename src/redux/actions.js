export const ADD_CART = "ADD_CART";
export const LOGIN = "LOGIN";

export const addToCart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};

export const UserLogin = (payload) => ({ type: LOGIN, payload: payload });
