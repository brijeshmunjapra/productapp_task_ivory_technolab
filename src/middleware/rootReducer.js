import { combineReducers } from "redux";
import { productData } from "./productReducer";
import { cartData } from "./cartReducer";

export default combineReducers({
  productData,
  cartData,
});
