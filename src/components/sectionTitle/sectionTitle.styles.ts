import { fromBottom } from '@/styles/keyframes/keyframes';
import styled, { css } from 'styled-components';

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    position: relative;
    opacity: 0;

    &:before {
      transition: all 0.8s ease;
      content: '';
      display: block;
      width: 0px;
      height: 16px;
      background-color: ${theme.colors.redSecondary};
      position: absolute;
      bottom: 10px;
      z-index: -1;
      border-radius: 1px;
    }

    &.active {
      animation: ${fromBottom} 0.5s backwards;
      opacity: 1;

      &:before {
        width: 92px;
      }
    }

    @media (max-width: ${theme.media.md}) {
      &:before {
        height: 15px;
        bottom: 10px;
      }

      &.active:before {
        width: 71px;
      }
    }
  `}
`;
