import React from 'react';

const UsersList = (props) => (
  <div>
    {props.users.map((user) => (
      <div key={user.id} className="each-user-layout">
        <div className="user-detail">
          <p>Name: {user.username}</p>
          <p>Email: {user.email || 'N/A'}</p>
        </div>
      </div>
    ))}
  </div>
);

export default UsersList;
