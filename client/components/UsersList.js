import React from 'react';

const UsersList = (props) => (
  <div>
    {props.users.map((user) => (
      <div key={user.id} className="each-user-layout">
        <div className="user-detail">
          <p>{user.userName}</p>
          <p>${user.email}</p>
        </div>
      </div>
    ))}
  </div>
);

export default UsersList;
