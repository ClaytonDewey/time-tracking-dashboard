import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icons';

interface timeframe {
  current: number;
  previous: number;
}

interface timeframes {
  daily: timeframe;
  weekly: timeframe;
  monthly: timeframe;
}

type CardProps = {
  title: string;
  timeframes: timeframes;
  statsBy: string;
};

const StyledCard = styled.div`
  width: 32.5rem;
  border-radius: 1.5rem;
  margin-bottom: 3rem;
  position: relative;
  padding-top: 4.5rem;
  background-repeat: no-repeat;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    right: 1rem;
    top: -1rem;
  }

  &.work {
    background-color: var(--work);
  }

  &.play {
    background: var(--play);
  }

  &.study {
    background: var(--study);
  }

  &.exercise {
    background: var(--exercise);
  }

  &.social {
    background: var(--social);
  }

  &.selfcare {
    background: var(--selfcare);
  }

  .card {
    &-body {
      position: relative;
      background-color: var(--dark-blue);
      border-radius: 1.5rem;
      z-index: 100;
    }
  }
`;

const Card: React.FC<CardProps> = ({ title, timeframes, statsBy }) => {
  console.log(title);
  return (
    <StyledCard
      className={title !== 'Self Care' ? `${title.toLowerCase()}` : 'selfcare'}>
      <Icon
        name={title !== 'Self Care' ? `${title.toLowerCase()}` : 'selfcare'}
      />
      <div className='card-body'>
        <p>{title}</p>
        {statsBy === 'daily' ? (
          <p>{timeframes.daily.current}</p>
        ) : statsBy === 'weekly' ? (
          <p>{timeframes.weekly.current}</p>
        ) : (
          <p>{timeframes.monthly.current}</p>
        )}
      </div>
    </StyledCard>
  );
};
export default Card;
