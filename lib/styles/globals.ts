import { css } from '@emotion/react';
import { colors } from './colors';
import { breakPoints, defaultTheme } from './theme';

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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-family: ${defaultTheme.fonts.heading};
    line-height: ${defaultTheme.lineHeights.heading};
    color: ${colors.heading};
    font-weight: ${defaultTheme.fontWeights.heading};
    margin: 0;
    margin-bottom: 8px;
  }
  h1,
  .h1 {
    font-size: ${defaultTheme.fontSize.h1[0]};
    @media ${breakPoints.smUp} {
      font-size: ${defaultTheme.fontSize.h1[1]};
    }
    @media ${breakPoints.mdUp} {
      font-size: ${defaultTheme.fontSize.h1[2]};
    }
    @media ${breakPoints.lgUp} {
      font-size: ${defaultTheme.fontSize.h1[3]};
    }
  }
  h2,
  .h2 {
    font-size: ${defaultTheme.fontSize.h2[0]};
    @media ${breakPoints.mdUp} {
      font-size: ${defaultTheme.fontSize.h2[1]};
    }
    @media ${breakPoints.lgUp} {
      font-size: ${defaultTheme.fontSize.h2[2]};
    }
  }
  h3,
  .h3 {
    font-size: ${defaultTheme.fontSize.h3[0]};
    @media ${breakPoints.lgUp} {
      font-size: ${defaultTheme.fontSize.h3[1]};
    }
  }
  h4,
  .h4 {
    font-size: ${defaultTheme.fontSize.h4[0]};
    @media ${breakPoints.lgUp} {
      font-size: ${defaultTheme.fontSize.h4[1]};
    }
  }
  h5,
  .h5 {
    font-size: ${defaultTheme.fontSize.h5[0]};
    @media ${breakPoints.lgUp} {
      font-size: ${defaultTheme.fontSize.h5[1]};
    }
  }
  h6,
  .h6 {
    font-size: ${defaultTheme.fontSize.h6[0]};
    @media ${breakPoints.lgUp} {
      font-size: ${defaultTheme.fontSize.h6[1]};
    }
  }
  p {
    margin: 0 0 15px;
    font-family: ${defaultTheme.fonts.body};
    color: ${colors.text};
    font-weight: ${defaultTheme.fontWeights.body};
    &:last-child {
      margin-bottom: 0;
    }
    &:only-child {
      margin-bottom: 0;
    }
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
