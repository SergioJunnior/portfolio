import { createGlobalStyle, css } from 'styled-components';

const baseTitle = `
  font-style: normal;
  line-height: 1.5;
  color: #FFFFFF; 
  margin: 0px;
`;

export const TypographyStyle = createGlobalStyle`
${({ theme }) => css`
  .title-medium {
    ${baseTitle};
    font-weight: ${theme.font.bold};
    font-size: 4rem;
  }
  .title {
    ${baseTitle};
    font-weight: ${theme.font.bold};
    font-size: 3rem;
  }

  .subtitle {
    ${baseTitle};
    font-weight: ${theme.font.medium};
    font-size: 2.25rem;
  }

  .subtitle-medium {
    ${baseTitle};
    font-weight: ${theme.font.bold};
    font-size: 2rem;
  }

  .subtitle-small {
    ${baseTitle};
    font-weight: ${theme.font.medium};
    font-size: 1.5rem;
  }

  .paragraph {
    ${baseTitle};
    font-weight: ${theme.font.normal};
    font-size: 1rem;
  }

  .phrase {
    ${baseTitle};
    font-weight: ${theme.font.normal};
    font-size: 1.125rem;
  }

  .text {
    ${baseTitle};
    font-weight: ${theme.font.bold};
    font-size: 1rem;
  }

  .tag {
    ${baseTitle};
    font-weight: ${theme.font.medium};
    font-size: 0.875rem;
  }
`};

 
`;
