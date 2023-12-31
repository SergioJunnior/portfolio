import { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import imgBrazil from '../../assets/header/brazil.png';
import imgEUA from '../../assets/header/eua.png';
import imgSpanish from '../../assets/header/spain.png';

import * as S from './header.styles';
import { Container } from '@/styles/globals';
import useScroll from '@/hooks/useSroll';
import FlagButton from '../flagButton/flagButton';
import Typography from '../typography/typography';

const storageLangName = 'SergioJunior@lang';

const DURATION = 1000;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrolled } = useScroll(200);
  const [langSelected, setLangSelected] = useState('pt-BR');
  //localStorage.getItem(storageLangName) ||
  const handleChangeLang = (event: MouseEvent<HTMLButtonElement>) => {
    const langId = event.currentTarget.id;

    localStorage.setItem(storageLangName, langId);
    setLangSelected(langId);

    window.location.reload();
  };

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [isMenuOpen]);

  return (
    <S.Header scrolled={scrolled}>
      <Container>
        <S.ItemsWrapper>
          <Link
            to='home'
            spy={false}
            smooth='easeInOutQuart'
            duration={DURATION}
          >
            <S.LogoHeader>Sérgio Junior</S.LogoHeader>
          </Link>
          <S.FlagButtonWrapper>
            <S.FlagButtonContainer>
              <FlagButton
                id='pt-BR'
                name='brasil'
                aria-label='change language to Brasil'
                image={imgBrazil}
                onClick={handleChangeLang}
                disabled={langSelected === 'pt'}
              />
              <FlagButton
                id='en'
                name='usa'
                image={imgEUA}
                aria-label='change language to USA'
                onClick={handleChangeLang}
                disabled={langSelected === 'en'}
              />
              <FlagButton
                id='es'
                name='espana'
                image={imgSpanish}
                aria-label='change language to Espanã'
                onClick={handleChangeLang}
                disabled={langSelected === 'es'}
              />
            </S.FlagButtonContainer>
          </S.FlagButtonWrapper>
          <S.Nav>
            <S.NavItens className={isMenuOpen ? 'menu_active' : ''}>
              <S.NavItem>
                <Link
                  to='about'
                  spy={false}
                  smooth='easeInOutQuart'
                  duration={DURATION}
                  activeClass='active'
                >
                  <Typography
                    className='subtitle'
                    htmlElement='h1'
                    translateId='app.header.about'
                    messageDefault='app.header.about'
                  />
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to='portfolio'
                  spy={false}
                  smooth='easeInOutQuart'
                  duration={DURATION}
                  activeClass='active'
                >
                  <Typography
                    className='subtitle'
                    htmlElement='h1'
                    translateId='app.header.projects'
                    messageDefault='app.header.projects'
                  />
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to='experience'
                  spy={false}
                  smooth='easeInOutQuart'
                  duration={DURATION}
                  activeClass='active'
                >
                  <Typography
                    className='subtitle'
                    htmlElement='h1'
                    translateId='app.header.experience'
                    messageDefault='app.header.experience'
                  />
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to='contact'
                  spy={false}
                  smooth='easeInOutQuart'
                  duration={DURATION}
                  activeClass='active'
                >
                  <Typography
                    className='subtitle'
                    htmlElement='h1'
                    translateId='app.header.contact'
                    messageDefault='app.header.contact'
                  />
                </Link>
              </S.NavItem>
            </S.NavItens>
          </S.Nav>

          <S.HambIcon
            className={isMenuOpen ? 'menu_active' : ''}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </S.ItemsWrapper>
        <S.MobileWrapper
          id='hmocIu'
          className={isMenuOpen ? 'menu_active' : ''}
        >
          <S.MobileItems>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to='about'
                spy={false}
                smooth='easeInOutQuart'
                duration={DURATION}
              >
                <Typography
                  className='subtitle'
                  htmlElement='h1'
                  translateId='app.header.about'
                  messageDefault='app.header.about'
                />
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to='portfolio'
                spy={false}
                smooth='easeInOutQuart'
                duration={DURATION}
              >
                <Typography
                  className='subtitle'
                  htmlElement='h1'
                  translateId='app.header.projects'
                  messageDefault='app.header.projects'
                />
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to='experience'
                spy={false}
                smooth='easeInOutQuart'
                duration={DURATION}
              >
                <Typography
                  className='subtitle'
                  htmlElement='h1'
                  translateId='app.header.experience'
                  messageDefault='app.header.experience'
                />
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to='experience'
                spy={false}
                smooth='easeInOutQuart'
                duration={DURATION}
              >
                <Typography
                  className='subtitle'
                  htmlElement='h1'
                  translateId='app.header.contact'
                  messageDefault='app.header.contact'
                />
              </Link>
            </S.MobileItem>
            <S.FlagButtonWrapper>
              <S.FlagButtonContainer>
                <FlagButton
                  id='pt-BR'
                  name='brasil'
                  aria-label='change language to Brasil'
                  image={imgBrazil}
                  onClick={handleChangeLang}
                  disabled={langSelected === 'pt-BR'}
                />
                <FlagButton
                  id='en'
                  name='usa'
                  image={imgEUA}
                  aria-label='change language to USA'
                  onClick={handleChangeLang}
                  disabled={langSelected === 'en'}
                />
                <FlagButton
                  id='es'
                  name='espana'
                  image={imgSpanish}
                  aria-label='change language to Espanã'
                  onClick={handleChangeLang}
                  disabled={langSelected === 'es'}
                />
              </S.FlagButtonContainer>
            </S.FlagButtonWrapper>
          </S.MobileItems>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
