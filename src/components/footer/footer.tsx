import { Link } from 'react-scroll';
import * as S from './footer.styles';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <S.Wrapper>
      <S.Links>
        <S.LinksWrapper>
          <li>
            <Link
              to='about'
              spy={true}
              smooth='easeInOutQuart'
              duration={1000}
              activeClass='active'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='portfolio'
              spy={true}
              smooth='easeInOutQuart'
              duration={1000}
              activeClass='active'
            >
              Portfolio
            </Link>
          </li>
        </S.LinksWrapper>
      </S.Links>
      <S.Copyright>© {currentDate} - Sergio Junior</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
