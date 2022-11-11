import axios from 'axios';

// action types
const SET_PRODUCT = 'SET_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

// action creators
const _setProduct = (product) => ({ type: SET_PRODUCT, product });
const _updateProduct = (product) => ({ type: UPDATE_PRODUCT, product });

// thunks
export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.get(`/api/products/${productId}`);
      dispatch(_setProduct(product));
    } catch (error) {
      console.log('store/singleProduct fetchProduct ERROR: ', error);
      throw error;
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(
        `/api/products/${product.id}`,
        product
      );
      dispatch(_updateProduct(updated));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

const initialState = {};

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
