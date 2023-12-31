import React, { ButtonHTMLAttributes } from 'react';

import Image from 'next/image';
import { FlagButtonProps } from './flagButton.types';
import { FlagContainer } from './flagButton.styles';

const FlagButton = ({ name, image, ...props }: FlagButtonProps) => {
  return (
    <FlagContainer {...props} name={name}>
      <Image src={image} alt='' loading='lazy' />
    </FlagContainer>
  );
};

export default FlagButton;
