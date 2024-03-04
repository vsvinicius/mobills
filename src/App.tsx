import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Box, StyledEngineProvider } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Sidebar from '@components/ui/Sidebar';
import { SidebarSize } from '@lib/enums';
import Router from '@src/Router';
import darkTheme from '@src/styles/themes/dark';

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
          <LocalizationProvider
            adapterLocale="pt-BR"
            dateAdapter={AdapterDayjs}
          >
            <CssBaseline />
            <div className="flex">
              <Sidebar onToggleSize={toggleSidebarSize} size={sidebarSize} />
              <Box
                sx={{
                  minHeight: '100vh',
                  transition: 'width 300ms ease-in-out',
                  width: `calc(100% - ${sidebarSize})`,
                }}
              >
                <Router />
              </Box>
            </div>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}
