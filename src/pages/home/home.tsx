import { Link } from 'react-scroll';

import * as S from './home.styles';
import useAnimateOnScroll from '@/hooks/useAnimatedOnScroll';
import Button from '@/components/button/button';
import Typography from '@/components/typography/typography';

const Home = () => {
  const elementRef = useAnimateOnScroll();

  return (
    <S.HomeSection id='home' ref={elementRef}>
      <S.ItemsHomeWrapper>
        <S.Welcome>
          <Typography
            className='title'
            htmlElement='h1'
            translateId='app.hero.hello'
            messageDefault='app.hero.hello'
          />
        </S.Welcome>
        <S.Name>Sérgio Junior.</S.Name>
        <S.About>
          <Typography
            className='subtitle'
            htmlElement='h1'
            translateId='app.hero.work'
            messageDefault='app.hero.work'
          />
        </S.About>
      </S.ItemsHomeWrapper>
    </S.HomeSection>
  );
};

export default Home;
