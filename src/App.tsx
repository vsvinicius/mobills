import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/themes/default';

import GlobalStyles from './assets/styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
