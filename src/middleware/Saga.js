import { call, put, takeEvery, all, take } from "redux-saga/effects";
import {
  GET_PRODUCTS_FETCH,
  GET_PRODUCTS_SUCCESS,
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./productAction";
import axios from "axios";

function* fetchProduct() {
  const productdata = yield fetch("https://fakestoreapi.com/products");

  const data = yield productdata.json();

  return data;
}

function* postProduct(newProduct) {
  // console.log(newProduct, "data in saga");
  const productToPost = yield axios
    .post("https://fakestoreapi.com/products", newProduct)
    .then(function (response) {
      console.log(response.data, "Product Added");
    })
    .catch(function (error) {
      console.log(error);
    });

  return productToPost;
}

function* getProducts() {
  const products = yield call(fetchProduct);

  yield put({ type: GET_PRODUCTS_SUCCESS, products });
}

function* putProducts(productId, dataTobeEdit) {
  const productToPut = yield axios
    .put(`https://fakestoreapi.com/products/${productId}`, dataTobeEdit)
    .then(function (response) {
      console.log(response.data, "Product Updated");
    })
    .catch(function (error) {
      console.log(error);
    });

  return productToPut;
}

function* deleteProducts(productId) {
  const productToDelete = yield axios
    .delete(`https://fakestoreapi.com/products/${productId}`)
    .then(function (response) {
      console.log(response.data, "Product Deleted");
    })
    .catch(function (error) {
      console.log(error);
    });

  return productToDelete;
}

function* addNewProduct(payload) {
  const { newProduct } = payload;
  yield call(postProduct, newProduct);

  // yield put({
  //   type: ADD_NEW_PRODUCT_SUCCESS,
  //   addedProduct,
  // });
}

function* updateProduct(payload) {
  const { dataTobeEdit, productId } = payload;
  yield call(putProducts, productId, dataTobeEdit);
}
function* deleteProduct(payload) {
  const { productId } = payload;
  yield call(deleteProducts, productId);
}
function* mySaga() {
  yield all([
    takeEvery(GET_PRODUCTS_FETCH, getProducts),
    takeEvery(ADD_NEW_PRODUCT, addNewProduct),
    takeEvery(UPDATE_PRODUCT, updateProduct),
    takeEvery(DELETE_PRODUCT, deleteProduct),
  ]);
}

export default mySaga;
