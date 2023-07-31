// UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Joined Date: {user.joinedDate}</p>
    </div>
  );
};

export default UserProfile;
