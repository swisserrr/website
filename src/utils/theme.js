import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#CC4746',
      light: '#EBC3C3',
    },
    secondary: {
      main: '#EEEEEE',
      light: '#F8F8F8',
      new: '#DCDCDC',
      dark: '#D9D9D9',
    },
    black: {
      main: '#000',
      second: '#12181F',
      third: '#1A1A1A',
      four: '#191919',
    },
    cream: {
      light: '#F7F7F7',
      second: '#F4F1EB',
    },
    coldGray: {
      main: '#1E1E1E',
      secondary: '#bababa',
    },
    white: {
      main: '#fff',
    },
    pink: {
      main: '#F8DEE5',
      second: '#F4E6E6',
    },
    blue: {
      main: '#DEEFF8',
      dark: '#2447FF',
    },
    green: {
      main: '#67AC5B',
    },
    yellow: {
      main: '#FDEE8D',
    },
    orange: {
      main: '#ff8a00',
    },
  },
  fonts: {
    xtraSmall: '2.2rem',
    small: '2.8rem',
    medium: '3.6rem',
    large: '4.6rem',
    xlarge: '5.6rem',
  },
});

export default theme;
