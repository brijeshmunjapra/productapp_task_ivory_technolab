import { GET_PRODUCTS_SUCCESS } from "./productAction";

export const productData = (state = null, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, products: action?.products };
  } else {
    return state;
  }
};
