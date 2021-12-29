import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const defaultTheme = {
  fontSize: {
    body: '0.875rem',
    h1: ['2.1875rem', '2.1875rem', '2.1875rem', '2.1875rem'],
    h2: ['1.75rem', '1.75rem', '1.75rem'],
    h3: ['1.53125rem', '1.53125rem'],
    h4: ['1.3125rem', '1.3125rem'],
    h5: ['1.09375rem', '1.09375rem'],
    h6: ['0.875rem', '0.875rem'],
  },
  fonts: {
    body: `'IBM Plex Sans', sans-serif`,
    heading: `'IBM Plex Sans', sans-serif`,
    interUi: `-apple-system, BlinkMacSystemFont, "Inter UI", Roboto, sans-serif`,
    rubik: `'Rubik', sans-serif`,
  },
  fontWeights: {
    body: 400,
    heading: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
};

export const defaultMaterialTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export const breakPointsHeight = {
  iphone8Down: '(max-height: 666px)',
  iphone8PlusDown: '(max-height: 735px)',
  iphoneXDown: '(max-height: 811px)',
  iphone8PUp: '(min-height: 667px)',
  iphone8PlusUp: '(min-height: 736px)',
  iphoneXUp: '(min-height: 812px)',
};

export const breakPoints = {
  xsDown: '(max-width: 320px)',
  smDown: '(max-width: 575px)',
  mdDown: '(max-width: 767px)',
  lgDown: '(max-width: 991px)',
  xlDown: '(max-width: 1199px)',
  xxlDown: '(max-width: 1599px)',
  xxxlDown: '(max-width: 1999px)',
  xsUp: '(min-width: 321px)',
  smUp: '(min-width: 576px)',
  mdUp: '(min-width: 768px)',
  lgUp: '(min-width: 992px)',
  xlUp: '(min-width: 1200px)',
  xxlUp: '(min-width: 1600px)',
  xxxlUp: '(min-width: 2000px)',
};
