import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS } from "./productAction";
function* fetchProduct() {
  const productdata = yield fetch("https://fakestoreapi.com/products");

  const data = yield productdata.json();

  return data;
}

function* getProducts() {
  const products = yield call(fetchProduct);
  yield put({ type: GET_PRODUCTS_SUCCESS, products });
}

function* mySaga() {
  yield takeLatest(GET_PRODUCTS_FETCH, getProducts);
}

export default mySaga;
