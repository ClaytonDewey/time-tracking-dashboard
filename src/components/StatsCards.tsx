import React from 'react';
import styled from 'styled-components';
import data from '../data.json';
import Card from './Card';

type StatsCardsProps = {};

const FlexGrid = styled.div`
  display: flex;
  gap: 3rem;
  flex-flow: row wrap;
`;

const StatsCards: React.FC<StatsCardsProps> = () => {
  return (
    <FlexGrid>
      {data.map((stat, index) => (
        <Card
          key={index}
          title={stat.title}
          timeframes={stat.timeframes}
          statsBy='weekly'
        />
      ))}
    </FlexGrid>
  );
};
export default StatsCards;
