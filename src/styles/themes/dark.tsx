import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Maven Pro',
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#1C1C1E',
      paper: '#2C2C2E',
    },
    primary: {
      main: '#7c4dff',
      light: '#E0E3FF',
      dark: '#6515DD',
    },
    success: {
      main: '#00BFA5',
      light: '#1ABCA6',
    },
    error: {
      main: '#EF5350',
    },
    grey: {
      900: '#2C2C2E',
      200: '#BCBCBC',
      100: '#E6E6E6',
    },
  },
});

export default darkTheme;
