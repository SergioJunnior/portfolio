import { StaticImageData } from 'next/image';
import { ButtonHTMLAttributes } from 'react';

export interface FlagButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  image: StaticImageData;
}
