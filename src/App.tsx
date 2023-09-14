import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/styles/themes/default';

import GlobalStyles from './assets/styles/GlobalStyles';
import Router from './Router';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
