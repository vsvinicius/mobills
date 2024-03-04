import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  breakpoints: {
    values: {
      lg: 1440,
      md: 1024,
      sm: 768,
      xl: 1920,
      xs: 320,
    },
  },
  palette: {
    background: {
      default: '#1C1C1E',
      paper: '#2C2C2E',
    },
    error: {
      main: '#EF5350',
    },
    grey: {
      100: '#E6E6E6',
      200: '#BCBCBC',
      900: '#2C2C2E',
    },
    mode: 'dark',
    primary: {
      dark: '#6515DD',
      light: '#E0E3FF',
      main: '#7c4dff',
    },
    success: {
      light: '#1ABCA6',
      main: '#00BFA5',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Maven Pro',
    },
  },
});

export default darkTheme;
