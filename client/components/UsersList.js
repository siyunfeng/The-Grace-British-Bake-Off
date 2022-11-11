import React from 'react';
import AdminUserCard from './AdminUserCard';

const UsersList = (props) => (
  <div className="all-users-layout">
    {props.users.map((user) => (
      <AdminUserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UsersList;
