import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <h1 className="user-welcome-page">Welcome, {username}!</h1>
      <img
        className="user-welcome-img"
        src="https://pbs.twimg.com/media/FePLpNrWAAIci7Z?format=jpg&name=large"
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

export default connect(mapState)(Home);
