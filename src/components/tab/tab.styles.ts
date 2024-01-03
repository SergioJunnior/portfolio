import styled, { css } from 'styled-components';

export const TabContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    min-height: 400px;
    width: 100%;

    aside {
      min-width: 130px;
      margin-right: 1rem;
      z-index: 0;

      button {
        width: 100%;
        max-height: 45px;
        padding: 0.5rem;

        border: none;
        border-left: 4px solid transparent;
        border-radius: 0.25rem 0 0 0.25rem;

        color: ${theme.colors.bluePrimary};
        font-weight: 700;
        font-size: 1.6rem;

        text-align: start;

        & + button {
          margin-top: 0.25rem;
        }

        &.active {
          max-height: 60px;
          opacity: 1;
          border-left: 4px solid ${theme.colors.blueSecondary};
          background-image: ${theme.colors.mainbg};
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 0 1rem;

      aside {
        display: flex;
        width: 100%;

        margin-right: 0;
        margin-bottom: 1rem;

        button {
          margin-right: 0.5rem;
          width: fit-content;
        }
      }
    }
  `}
`;

export const TabContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 100%;
    max-width: 800px;
    overflow: hidden;

    border-radius: 0 0.25rem 0.25rem 0;

    border-right: 4px solid ${theme.colors.bluePrimary};

    background-image: ${theme.colors.white};

    section {
      height: 100%;
      padding: 2rem;

      h4,
      h4 {
        margin-bottom: 1rem;
        color: ${theme.colors.bluePrimary};
      }

      .description-container {
        width: 100%;
        text-indent: 1.5rem;

        span {
          display: block;
          text-align: justify;

          color: ${theme.colors.bluePrimary};

          & + span {
            margin-top: 0.5rem;
          }
        }
      }

      .company-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 1.5rem;

        p,
        p {
          color: ${theme.colors.bluePrimary};
        }
      }
    }
  `}
`;
