import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Box, StyledEngineProvider } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import 'dayjs/locale/pt-BR';

import { SidebarSize } from '@lib/enums';
import darkTheme from '@src/styles/themes/dark';
import Sidebar from '@components/ui/Sidebar';
import Router from '@src/Router';

dayjs.locale('pt-BR');
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
            dateAdapter={AdapterDayjs}
            adapterLocale="pt-BR"
          >
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
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}
