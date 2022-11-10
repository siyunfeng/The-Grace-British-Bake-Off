import axios from 'axios';

const CREATE_ORDER = 'CREATE_ORDER';
// const ADD_TO_CART = 'ADD_TO_CART';

const _createOrder = (order) => ({ type: CREATE_ORDER, order });

// createOrder()
export const createOrder = () => {
  return async (dispatch) => {
    try {
      // NOTE: need to change tempCart to cart later
      const { data: order } = await axios.post(`/api/tempCart`, {
        fulfilled: false,
      });
      dispatch(_createOrder(order));
    } catch (error) {
      console.log('store/singleProduct createOrder ERROR: ', error);
      throw error;
    }
  };
};

// addToCart(orderId, product)
const initialState = {};

export default function tempOrderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return action.order;
    default:
      return state;
  }
}
