import React from 'react';
import styled from 'styled-components';
import CardsContainer from './CardsContainer';
import UserCard from './UserCard';

type ContainerProps = {};

const StyledContainer = styled.main`
  width: 100%;

  @media screen and (min-width: 48em) {
    display: flex;
    gap: 3rem;
  }
`;

const Container: React.FC<ContainerProps> = () => {
  return (
    <StyledContainer>
      <UserCard />
      <CardsContainer />
    </StyledContainer>
  );
};
export default Container;
