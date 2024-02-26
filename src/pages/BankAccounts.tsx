import AccountItem from '@components/AccountItem';
import MonthCalendar from '@components/MonthCalendar';
import { Add } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';

export default function BankAccounts() {
  return (
    <div className="h-full w-full p-4">
      <header className="flex h-24 w-full items-center justify-center">
        <MonthCalendar />
      </header>
      <Typography variant="h4" className="font-bold">
        Contas
      </Typography>
      <main className="grid grid-cols-3">
        <Box className="col-start-1 col-end-3 flex flex-wrap gap-4">
          <Paper className="flex h-60 w-[48.95%] flex-col items-center justify-center gap-4 rounded-3xl font-bold text-primary">
            <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border border-solid">
              <Add />
            </div>
            <Typography variant="h6" fontWeight="bold">
              Nova conta
            </Typography>
          </Paper>
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
        </Box>
        <Box>saldos</Box>
      </main>
    </div>
  );
}
