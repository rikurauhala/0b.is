import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00796b',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1de9b6',
    },
    secondary: {
      main: '#00bfa5',
    },
    background: {
      default: '#101010',
      paper: '#161616',
    },
    error: {
      main: '#ff1744',
    },
  },
});
