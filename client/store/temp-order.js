import axios from 'axios';

const ORDER = 'order';

const CREATE_ORDER = 'CREATE_ORDER';
const GET_ORDER = 'GET_ORDER';
const FULFILL_ORDER = 'FULFILL_ORDER';

const _createOrder = (order) => ({ type: CREATE_ORDER, order });
const _getOrder = (order) => ({ type: GET_ORDER, order });
const _fulfillOrder = (order) => ({ type: FULFILL_ORDER, order });

// createOrder()
export const createOrder = () => {
  return async (dispatch) => {
    try {
      // NOTE: need to change tempCart to order later
      const { data: order } = await axios.post(`/api/tempCart`, {
        fulfilled: false,
      });
      window.localStorage.setItem(ORDER, JSON.stringify(order));
      dispatch(_createOrder(order));
    } catch (error) {
      console.log('store/temp-order createOrder ERROR: ', error);
      throw error;
    }
  };
};

export const getOrder = (orderId) => {
  return async (dispatch) => {
    try {
      // NOTE: need to change tempCart to order later
      // console.log('Here is temp-order getOrder()');
      const { data: order } = await axios.get(`/api/tempCart/${orderId}`);
      // console.log('getOrder thunk: order =', order);
      dispatch(_getOrder(order));
    } catch (error) {
      console.log('store/temp-order getOrder ERROR: ', error);
      throw error;
    }
  };
};

export const fullfillOrder = (order) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/tempCart/${order.id}`, {
        ...order,
        fulfilled: true,
      });
      window.localStorage.clear();
      dispatch(_fulfillOrder(updated));
    } catch (error) {
      console.log('store/temp-order fullfillOrder ERROR', error);
      throw error;
    }
  };
};

const initialState = {};

export default function tempOrderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return action.order;
    case GET_ORDER:
      return action.order;
    case FULFILL_ORDER:
      return action.order;
    default:
      return state;
  }
}
