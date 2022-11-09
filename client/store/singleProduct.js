import axios from 'axios';

const SET_PRODUCT = 'SET_PRODUCT';

const _setProduct = (product) => ({ type: SET_PRODUCT, product });

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

const initialState = {};

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
