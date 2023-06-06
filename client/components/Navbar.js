import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import Cart from './Cart';

const Navbar = ({ handleClick, isLoggedIn, userType, orderId }) => (
  <div>
    <Link to='/shop'>
      <h1 id='shop-name'>The Grace British Bake Off</h1>
    </Link>
    <nav>
      {isLoggedIn && userType == 'CUSTOMER' ? (
        <div>
          <Link to='/home'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to={`/cart/${orderId}`}>Cart</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : isLoggedIn && userType == 'ADMIN' ? (
        <div>
          <Link to='/manage'>Manage</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to='/shop'>Shop</Link>
          <Link to={`/cart/${orderId}`}>Cart</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    userType: state.auth.userType,
    orderId: state.order.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
