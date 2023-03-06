import React from 'react';
import IconEllipsis from './ellipsis';
import IconExercise from './exercise';
import IconPlay from './play';
import IconSelfcare from './selfcare';
import IconSocial from './social';
import IconStudy from './study';
import IconWork from './work';

type IconProps = {
  name: string;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'ellipsis':
      return <IconEllipsis />;
    case 'exercise':
      return <IconExercise />;
    case 'play':
      return <IconPlay />;
    case 'selfcare':
      return <IconSelfcare />;
    case 'social':
      return <IconSocial />;
    case 'study':
      return <IconStudy />;
    case 'work':
      return <IconWork />;
    default:
      return <IconEllipsis />;
  }
};
export default Icon;
