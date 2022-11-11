import axios from 'axios';

// Action Type:
const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Action Creator:
export const _setProducts = (products) => ({ type: SET_PRODUCTS, products });
const _createProduct = (product) => ({ type: CREATE_PRODUCT, product });
const _deleteProduct = (product) => ({ type: DELETE_PRODUCT, product });

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

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post('/api/products', product);
      dispatch(_createProduct(created));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export const deleteProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: deleted } = await axios.delete(
        `/api/products/${product.id}`
      );
      dispatch(_deleteProduct(deleted));
    } catch (error) {
      console.error(error);
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
    case CREATE_PRODUCT:
      return [...state, action.product];
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
