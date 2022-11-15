import axios from 'axios';

// This is used for the cart, but a storee/singleOrder.js file would be extremely similar.

const SET_CART = 'SET_CART';
const ADD_ITEM = 'ADD_ITEM';

const _setCart = (cart) => ({ type: SET_CART, cart });
const _addItem = (item) => ({ type: ADD_ITEM, item });

export const fetchCart = (orderId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/cart/${orderId}`);
      dispatch(_setCart(cart));
    } catch (error) {
      console.log('store/cart/:orderId fetchCart ERROR: ', error);
      throw error;
    }
  };
};

export const addToCart = (orderId, product, quantityInput) => {
  return async (dispatch) => {
    try {
      console.log('Add to cart thunk -- orderId: ', orderId);
      const { data: item } = await axios.post(`/api/cart/${orderId}`, {
        num_items: quantityInput,
        product,
      });
      dispatch(_addItem(item));
    } catch (error) {
      console.log('store/cart/:orderId addToCart ERROR: ', error);
      throw error;
    }
  };
};

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_ITEM: {
      const arr = state.filter(
        (product) => product.productId !== action.item.productId
      );
      return arr.concat(action.item);
    }
    default:
      return state;
  }
}
