import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import darkTheme from '@assets/styles/themes/dark';
import Router from '@src/Router';
import Sidebar from '@components/Sidebar';
import { Box, StyledEngineProvider } from '@mui/system';
import { SidebarSize } from '@lib/enums';

export default function App() {
  const [sidebarSize, setSidebarSize] = useState<SidebarSize>(SidebarSize.SM);
  function toggleSidebarSize() {
    setSidebarSize((prevState) =>
      prevState === SidebarSize.LG ? SidebarSize.SM : SidebarSize.LG,
    );
  }
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <div className="flex">
            <Sidebar onToggleSize={toggleSidebarSize} size={sidebarSize} />
            <Box
              sx={{
                minHeight: '100vh',
                width: `calc(100% - ${sidebarSize})`,
                transition: 'width 300ms ease-in-out',
              }}
            >
              <Router />
            </Box>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}
