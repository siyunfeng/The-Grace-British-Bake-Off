import axios from 'axios';

// Action Type:
const SET_PRODUCTS = 'SET_PRODUCTS';

// Action Creator:
const _setProducts = (products) => ({ type: SET_PRODUCTS, products });

// Thunk:
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get('/api/products');
      dispatch(_setProducts(products));
    } catch (error) {
      console.log('store/allProducts fetchProducts ERROR: ', error);
      throw error;
    }
  };
};

// Initial State:
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
