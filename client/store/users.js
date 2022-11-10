import axios from 'axios';

// action types
const SET_USERS = 'SET_USERS';

// action creators
export const _setUsers = (users) => ({ type: SET_USERS, users });

// thunks
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get(`/api/users`);
      dispatch(_setUsers(users));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
}
