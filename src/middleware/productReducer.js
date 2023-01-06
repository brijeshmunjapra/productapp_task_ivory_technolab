import { GET_PRODUCTS_SUCCESS } from "./productAction";

export const productData = (state = null, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, products: action?.products };
  } else {
    return state;
  }
};

// export const addNewProduct = (state = null, action) => {
//   // console.log(action, "data in reducer");
//   if (action.type === ADD_NEW_PRODUCT_SUCCESS) {
//     return { ...state, addedProduct: action?.addedProduct };
//   } else {
//     return state;
//   }
// };
