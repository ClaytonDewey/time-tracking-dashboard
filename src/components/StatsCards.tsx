import React from 'react';
import data from '../data.json';

type StatsCardsProps = {};

const StatsCards: React.FC<StatsCardsProps> = () => {
  return (
    <>
      {data.map((stat, index) => (
        <div key={index}>{stat.title}</div>
      ))}
    </>
  );
};
export default StatsCards;
