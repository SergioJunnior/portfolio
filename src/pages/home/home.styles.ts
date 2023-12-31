import { shakeHands, fromBottom } from '@/styles/keyframes/keyframes';
import styled, { css } from 'styled-components';

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.Giant};
    line-height: 1.2;

    margin: 10px auto 0px -3px;

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.XxxLarge};
    }

    @media (max-width: ${theme.media.sm}) {
      font-size: ${theme.font.sizes.Large};
      line-height: 1.4;
    }
  `}
`;

export const About = styled.div`
  margin: 20px auto 35px 0px;
`;

export const Welcome = styled.div`
  display: flex;
`;

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0 2rem;
  z-index: -1;

  &.active {
    ${Name} {
      animation: ${fromBottom} 0.5s ease;
    }

    ${Welcome} {
      animation: ${fromBottom} 0.5s ease;
    }

    ${About} {
      animation: ${fromBottom} 0.7s ease;
    }

    button {
      animation: ${fromBottom} 0.85s ease;
    }
  }
`;

export const ItemsHomeWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 4rem;

    @media (max-width: ${theme.media.sm}) {
      padding: 0 1.5rem;
    }
  `}
`;
