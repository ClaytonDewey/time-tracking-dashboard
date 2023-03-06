import React from 'react';

type UserCardProps = {};

const UserCard: React.FC<UserCardProps> = () => {
  return (
    <>
      <img src='./images/image-jeremy.png' alt='Jeremy Robson' />
      <p>Report for</p>
      <h1>Jeremy Robson</h1>
    </>
  );
};
export default UserCard;
