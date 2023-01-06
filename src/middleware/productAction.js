export const GET_PRODUCTS_FETCH = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
// export const ADD_NEW_PRODUCT_SUCCESS = "ADD_NEW_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
// export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProduct = () => {
  return {
    type: GET_PRODUCTS_FETCH,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const addNewProduct = (newProduct) => {
  // console.log(newProduct, "data in Action");
  return {
    type: ADD_NEW_PRODUCT,
    newProduct,
  };
};

export const updateProduct = (productId, dataTobeEdit) => {
  // console.log(newProduct, "data in Action");
  return {
    type: UPDATE_PRODUCT,
    productId,
    dataTobeEdit,
  };
};

export const deleteProduct = (productId, dataTobeDelete) => {
  // console.log(newProduct, "data in Action");
  return {
    type: DELETE_PRODUCT,
    productId,
  };
};
