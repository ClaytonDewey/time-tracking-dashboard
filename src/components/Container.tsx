import React from 'react';
import styled from 'styled-components';
import CardsContainer from './CardsContainer';
import UserCard from './UserCard';

type ContainerProps = {};

const StyledContainer = styled.main`
  width: 100%;
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
