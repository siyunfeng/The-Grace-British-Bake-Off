import axios from 'axios';

// This is used for the cart, but a storee/singleOrder.js file would be extremely similar.

const SET_CART = 'SET_CART';

const _setCart = (cart) => ({ type: SET_CART, cart });

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

initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}
