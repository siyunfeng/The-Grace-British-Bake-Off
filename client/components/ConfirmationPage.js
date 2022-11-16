import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const ConfirmationPage = (props) => {
  const { username } = props;
  return (
    <div>
      <h1 id="confirmation">Thank You For Your Order!</h1>
      <img
        className="user-welcome-img"
        src="https://static.vecteezy.com/system/resources/previews/001/936/465/non_2x/cute-bakery-chef-boy-holding-a-cake-smiling-cartoon-art-illustration-vector.jpg"
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

export default connect(mapState)(ConfirmationPage);
