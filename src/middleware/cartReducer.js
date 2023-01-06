import { ADD_TO_CART } from "./productAction";

const initialState = {
  cartItems: null,
};

export const cartData = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    //console.log(action.payload, "action");
    return { ...state, cartItems: action?.payload };
  } else {
    return state;
  }
};
