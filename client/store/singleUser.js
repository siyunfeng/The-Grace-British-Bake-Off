import axios from 'axios';

// action types
const SET_USER = 'SET_USER';

// action creators
export const _setUser = (user) => ({ type: SET_USER, user });

// thunks
export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.get(`/api/users/${userId}`);
      dispatch(_setUser(user));
    } catch (error) {
      console.log('store/singleUser fetchUser ERROR: ', error);
      throw error;
    }
  };
};

const initialState = {};

export default function singleUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
