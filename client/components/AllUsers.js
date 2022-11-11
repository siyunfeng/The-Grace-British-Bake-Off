import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store';
import UsersList from './UsersList';

export class AllUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  async componentDidMount() {
    await this.props.getUsers();
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <main>
          <p>Loading users...</p>
        </main>
      );
    } else {
      const { users } = this.props;
      const checkUsers = users || [];
      const hasUsers = checkUsers.length !== 0;

      return (
        <main>
          {hasUsers ? (
            <div>
              <p>Total # of users: {users.length}</p>
              <UsersList users={users} />
            </div>
          ) : (
            <h1>Users Coming Soon!</h1>
          )}
        </main>
      );
    }
  }
}

const mapState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(AllUsers);
