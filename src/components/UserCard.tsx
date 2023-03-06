import React from 'react';
import styled from 'styled-components';

type UserCardProps = {};

const StyledUserCard = styled.div`
  width: 32.5rem;
  background-color: var(--dark-blue);
  border-radius: 1.5rem;
  margin-bottom: 3rem;

  .user {
    height: 13.3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--primary-blue);
    border-radius: 1.5rem;
    padding-left: 2.9rem;

    img {
      border: 3px solid var(--white);
      border-radius: 5rem;
      width: 7rem;
      height: 7rem;
      margin-right: 1.6rem;
    }

    &-info {
      text-align: left;

      p {
        font-size: 1.4rem;
        margin-bottom: 3px;
        color: var(--pale-blue);
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 300;
      }
    }
  }

  .stats-by {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 7rem;

    button {
      border: none;
      font-size: 1.6rem;
      font-weight: 400;
      background-color: transparent;
      color: var(--desaturated-blue);
      cursor: pointer;

      &.active {
        color: var(--white);
      }
    }
  }
`;

const UserCard: React.FC<UserCardProps> = () => {
  return (
    <StyledUserCard>
      <span className='user'>
        <img src='./images/image-jeremy.png' alt='Jeremy Robson' />
        <span className='user-info'>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </span>
      </span>
      <span className='stats-by'>
        <button>Daily</button>
        <button className='active'>Weekly</button>
        <button>Monthly</button>
      </span>
    </StyledUserCard>
  );
};
export default UserCard;
