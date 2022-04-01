export const ADD_CART = "ADD_CART";

export const addToCart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};
