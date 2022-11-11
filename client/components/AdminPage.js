import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const AdminPage = (props) => {
  return (
    <div>
      <h3>Welcome, Admin</h3>
      <p>
        <Link to="/manage/users">Manage Users</Link>
      </p>
      <p>
        <Link to="/manage/products">Manage Products</Link>
      </p>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(AdminPage);
