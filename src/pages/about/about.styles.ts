import { fromBottom } from '@/styles/keyframes/keyframes';
import styled, { css } from 'styled-components';

export const AboutSection = styled.section`
  ${({ theme }) => css`
    height: auto;
    padding: 12rem 0;
    max-width: 125rem;
    margin: 0 auto;

    &.active div p {
      animation: ${fromBottom} 0.7s ease;
    }

    @media (max-width: ${theme.media.md}) {
      padding: 9rem 0px;
    }
  `}
`;

export const AboutTexts = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.Small};
    font-weight: ${theme.font.light};

    p {
      margin: 30px auto;
    }

    u {
      color: ${theme.colors.redSecondary};
      text-decoration: none;
    }

    a {
      color: ${theme.colors.redSecondary};
      text-decoration: underline;
      transition: all 0.2s;

      &::hover {
        color: ${theme.colors.blueSeconday};
      }
    }

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.XSmall};
    }
  `}
`;
