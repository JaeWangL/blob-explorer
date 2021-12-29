import color from 'color';

const primary = '#0168fa';
const secondary = '#5f6d88';
const gray50 = '#fafbfc';
const gray100 = '#f4f5f8';
const gray200 = '#e3e7ed';
const gray300 = '#cdd4e0';
const gray400 = '#b4bdce';
const gray500 = '#97a3b9';
const gray600 = '#7987a1';
const gray700 = '#596882';
const gray800 = '#3b4863';
const gray900 = '#1c273c';
const gray950 = '#637388';

export const colors = {
  primary,
  secondary,
  success: '#10b759',
  info: '#00b8d4',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#e5e9f2',
  dark: '#3b4863',
  background: color(gray900).darken(5).rgb().string(),
  white: '#ffffff',
  text: '#ffffff',
  text2: gray300,
  text3: '#8392a5',
  text4: color(gray700).alpha(0.7).rgb().string(),
  heading: '#ffffff',
  link: '#ffffff',
  border: '#485e9029',
  gray50,
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  gray700,
  gray800,
  gray900,
  gray950,
  darkdarken3: color(gray900).darken(3).rgb().string(),
  darkdarken5: color(gray900).darken(5).rgb().string(),
  darklighten2: color(gray900).lighten(2).rgb().string(),
  darklighten3: color(gray900).lighten(3).rgb().string(),
  darklighten8: color(gray900).lighten(8).rgb().string(),
};
