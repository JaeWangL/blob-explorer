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
  text: '#ffffff',
  text2: gray300,
  text3: '#8392a5',
  text4: color(gray700).alpha(0.7).rgb().string(),
  heading: '#ffffff',
  link: '#ffffff',
  darkdarken5: color(gray900).darken(5).rgb().string(),
};
