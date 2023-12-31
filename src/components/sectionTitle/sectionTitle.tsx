import useAnimateOnScroll from '@/hooks/useAnimatedOnScroll';

import * as S from './sectionTitle.styles';
import { TitlesProps } from './sectionTitle.types';

const Title = ({ children }: TitlesProps) => {
  const elementRef = useAnimateOnScroll();

  return <S.Title ref={elementRef}>{children}</S.Title>;
};

export default Title;
