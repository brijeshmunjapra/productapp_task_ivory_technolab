// import { call, put, takeLatest } from "redux-saga/effects";
// import {
//   GET_PRODUCTS_FETCH,
//   GET_PRODUCTS_SUCCESS,
//   ADD_NEW_PRODUCT,
// } from "./productAction";

// import axios from "axios";

// function* postProduct(newProduct) {
//   const productToPost = yield axios
//     .post("https://fakestoreapi.com/products", newProduct)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   const data = yield productToPost.json();

//   return data;
// }

// function* getProducts() {
//   const products = yield call(postProduct);
//   yield put({ type: GET_PRODUCTS_SUCCESS, products });
// }

// function* mySaga() {
//   yield takeLatest(GET_PRODUCTS_FETCH, getProducts);
// }

// export default mySaga;
