import { Title } from '@/components/sectionTitle/sectionTitle.styles';
import { fromBottom } from '@/styles/keyframes/keyframes';
import styled, { css } from 'styled-components';

export const ExperienceSection = styled.section`
  ${({ theme }) => css`
    height: auto;
    padding: 12rem 0;
    max-width: 125rem;
    margin: 0 auto;

    ${Title} {
      &.active:before {
        width: 160px;

        @media (max-width: ${theme.media.md}) {
          width: 155px;
        }
      }
    }

    &.active p {
      animation: ${fromBottom} 0.7s ease;
    }

    @media (max-width: ${theme.media.md}) {
      padding: 9rem 0px;
    }
  `}
`;

export const ExperienceContent = styled.div`
  ${({ theme }) => css`
    width: 100%;

    margin: 0 auto;
    padding: 0 auto;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 0 auto;
      margin-top: 5rem;
      max-width: 1200px;
    }
  `}
`;
