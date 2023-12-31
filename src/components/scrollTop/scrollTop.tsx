import { Link } from 'react-scroll';

import * as S from './scrollTop.styles';
import useScroll from '@/hooks/useSroll';
import Image from 'next/image';

const ScrollTop = () => {
  const { scrolled } = useScroll();

  return (
    <S.ScrollTop scrolled={scrolled}>
      <Link to='home' spy={true} smooth='easeInOutQuart' duration={1000}>
        <Image
          width={20}
          height={20}
          src='/img/back_top.svg'
          alt='Icone para voltar ao topo da imagem'
        />
      </Link>
    </S.ScrollTop>
  );
};

export default ScrollTop;
