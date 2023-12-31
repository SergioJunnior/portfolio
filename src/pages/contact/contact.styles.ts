import { Title } from '@/components/sectionTitle/sectionTitle.styles';
import { fromBottom } from '@/styles/keyframes/keyframes';
import styled, { css } from 'styled-components';

export const ContactSection = styled.section`
  ${({ theme }) => css`
    height: auto;
    margin: 0rem auto 8rem auto;
    max-width: 500px;
    text-align: center;

    &.active > p,
    &.active > a {
      animation: ${fromBottom} 0.3s ease;
    }

    ${Title} {
      text-align: center;

      &.active:before {
        display: inline;
        width: 120px;

        @media (max-width: ${theme.media.md}) {
          width: 68px;
        }
      }
    }
  `}
`;

export const ContactMeText = styled.p`
  ${({ theme }) => css`
    margin: 3.5rem 0 5rem 0;
    font-size: ${theme.font.sizes.Small};
    text-align: center;

    a {
      color: ${theme.colors.secondary};

      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.XSmall};
    }
  `}
`;
