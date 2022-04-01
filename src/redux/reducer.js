import { ADD_CART } from "./actions";
const initialState = {
  cart: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};
