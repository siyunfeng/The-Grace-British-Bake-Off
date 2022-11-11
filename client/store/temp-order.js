import axios from 'axios';

const CREATE_ORDER = 'CREATE_ORDER';

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

const initialState = {};

export default function tempOrderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return action.order;
    default:
      return state;
  }
}
