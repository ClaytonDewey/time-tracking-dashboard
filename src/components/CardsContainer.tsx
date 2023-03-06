import React from 'react';
import styled from 'styled-components';
import StatsCards from './StatsCards';

type CardsContainerProps = {};

const StyledCardsContainer = styled.section`
  text-align: center;
`;

const CardsContainer: React.FC<CardsContainerProps> = () => {
  return (
    <StyledCardsContainer>
      <StatsCards />
    </StyledCardsContainer>
  );
};
export default CardsContainer;
