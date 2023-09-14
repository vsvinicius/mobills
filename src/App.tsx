import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/styles/themes/default';

import GlobalStyles from './assets/styles/GlobalStyles';

import { AppContainer, MainApp } from './components/App';

import Router from './Router';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppContainer>
          <Sidebar />
          <MainApp>
            <Router />
          </MainApp>
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
