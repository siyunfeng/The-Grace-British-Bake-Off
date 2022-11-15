import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const ConfirmationPage = (props) => {
  const { username } = props;
  return (
    <div>
      <h1>your order has been successfully placed!</h1>
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
