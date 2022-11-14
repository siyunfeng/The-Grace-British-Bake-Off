import React from 'react';

const UserCard = (props) => {
  const user = props.user;
  return (
    <div className="each-user-layout">
      <div className="user-header">
        <p className="user-name">{user.username}</p>
      </div>
      <hr></hr>
      <div className="user-detail">
        <p>Email: {user.email || 'N/A'}</p>
        <p>
          Role: {user.userType || 'N/A'}{' '}
          {user.userType === 'ADMIN' ? (
            <i
              className="em em-computer"
            ></i>
          ) : (
            <i
              className="em em-yum"
            ></i>
          )}
        </p>
      </div>
    </div>
  );
};
export default UserCard;
