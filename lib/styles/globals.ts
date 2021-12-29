import { css } from '@emotion/react';
import { colors } from './colors';
import { defaultTheme } from './theme';

export const globalStyles = css`
  html {
    overflow: hidden;
    overflow-y: auto;
  }
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    line-height: ${defaultTheme.lineHeights.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${defaultTheme.fonts.body};
    font-weight: ${defaultTheme.fontWeights.body};
    color: ${colors.text};
    font-size: ${defaultTheme.fontSize.body};
    background: ${colors.background};
  }

  * {
    box-sizing: border-box;
  }
  p {
    margin: 0;
  }
  a {
    transition: ${defaultTheme.transition};
    color: ${colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  input,
  select,
  textarea {
    width: 100%;
    font-size: 14px;
  }
  input,
  select {
    height: 40px;
    padding: 0 15px;
  }
  .wrapper {
    position: relative;
  }
`;
