import React from 'react';
import data from '../data.json';
import Card from './Card';

type StatsCardsProps = {};

const StatsCards: React.FC<StatsCardsProps> = () => {
  return (
    <>
      {data.map((stat, index) => (
        <Card
          key={index}
          title={stat.title}
          timeframes={stat.timeframes}
          statsBy='weekly'
        />
      ))}
    </>
  );
};
export default StatsCards;
