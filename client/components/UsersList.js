import React from 'react';
import UserCard from './UserCard';

const UsersList = (props) => (
  <div className="all-users-layout">
    {props.users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UsersList;
