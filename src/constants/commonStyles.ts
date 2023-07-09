import { css } from '@emotion/react';

const commonStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    display: flex;
    overflow: auto;
  }
`;

export const globalStyle = css`
  ${commonStyle}

  div#root {
    height: auto;
    min-height: 100%;
    flex-grow: 1;
  }
`;