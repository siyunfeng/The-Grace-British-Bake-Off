import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const AdminPage = (props) => {
  return (
    <div className='admin-manage-page'>
      <h1 className='admin-home-greeting'>Welcome, Admin! </h1>
      <div className='admin-manage'>
        <button>
          <Link to='/manage/users' className='link'>
            Manage Users
          </Link>
        </button>
        <button>
          <Link to='/manage/products' className='link'>
            Manage Products
          </Link>
        </button>
      </div>
      <img
        className='admin-welcome-img'
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
