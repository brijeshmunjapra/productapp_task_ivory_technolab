export const GET_PRODUCTS_FETCH = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

export const getProduct = () => {
  return {
    type: GET_PRODUCTS_FETCH,
  };
};
