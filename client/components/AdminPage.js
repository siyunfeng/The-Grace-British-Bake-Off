import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const AdminPage = (props) => {
  return (
    <div className="admin-manage-page">
      <h3>Welcome, Admin</h3>
      <p>
        <Link to="/manage/users">Manage Users</Link>
      </p>
      <p>
        <Link to="/manage/products">Manage Products</Link>
      </p>
      <img
        className="admin-welcome-img"
        src={
          'https://i.pinimg.com/564x/f1/91/c0/f191c02adb47d40e2a579977e66077b5.jpg'
        }
      />
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
