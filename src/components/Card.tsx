import React from 'react';
import styled from 'styled-components';
import { Icon, IconEllipsis } from '../Icons';

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
  padding-top: 4rem;
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
      padding: 2.5rem;
      /* z-index: 100; */

      &__head,
      &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      button {
        position: relative;
        background-color: transparent;
        border: none;

        svg {
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &__head {
        margin-bottom: 1rem;
      }

      &__content {
        span {
          color: var(--pale-blue);
          font-size: 1.4rem;
        }
        span:not(:last-child) {
          font-size: 3rem;
          color: var(--white);
        }
      }
    }
  }
`;

const Card: React.FC<CardProps> = ({ title, timeframes, statsBy }) => {
  const { daily, weekly, monthly } = timeframes;
  let typeToDisplay;
  statsBy === 'daily'
    ? (typeToDisplay = daily)
    : statsBy === 'weekly'
    ? (typeToDisplay = weekly)
    : (typeToDisplay = monthly);

  return (
    <StyledCard
      className={title !== 'Self Care' ? `${title.toLowerCase()}` : 'selfcare'}>
      <Icon
        name={title !== 'Self Care' ? `${title.toLowerCase()}` : 'selfcare'}
      />
      <div className='card-body'>
        <span className='card-body__head'>
          <p>{title}</p>
          <button>
            <IconEllipsis />
          </button>
        </span>
        <span className='card-body__content'>
          <span>
            {typeToDisplay.current}
            hrs
          </span>
          <span>Last week - {typeToDisplay.previous}hrs</span>
        </span>
      </div>
    </StyledCard>
  );
};
export default Card;
