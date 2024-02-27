import AccountItem from '@components/AccountItem';
import MonthCalendar from '@components/MonthCalendar';
import {
  Add,
  LocalAtmOutlined,
  PaidOutlined,
  TrendingUpRounded,
} from '@mui/icons-material';
import {
  Box,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material';

import ArrowIcon from '@components/ArrowIcon';
import SeeMoreMenu from '@components/SeeMoreMenu';
import { getMockedBankAccount } from '@models/BankAccount';

const mockedBankAccounts = [
  getMockedBankAccount(),
  getMockedBankAccount(),
  getMockedBankAccount(),
  getMockedBankAccount(),
];

export default function BankAccounts() {
  return (
    <div className="h-full w-full p-4">
      <header className="flex h-24 w-full items-center justify-center">
        <MonthCalendar />
      </header>
      <div className="mb-4 flex justify-between">
        <Typography variant="h4" className="font-bold">
          Contas
        </Typography>
        <div className="flex gap-3">
          <IconButton className="bg-paper text-primary">
            <Add />
          </IconButton>
          <IconButton className="bg-paper">
            <TrendingUpRounded />
          </IconButton>
          <SeeMoreMenu className="bg-paper">
            <MenuList>
              <MenuItem>Contas arquivadas</MenuItem>
              <MenuItem>Transferências fixas</MenuItem>
            </MenuList>
          </SeeMoreMenu>
        </div>
      </div>
      <main className="grid grid-cols-3">
        <Box className="col-start-1 col-end-3 flex flex-wrap gap-4">
          <Paper className="h-60 w-[48.95%] rounded-3xl font-bold text-primary">
            <div className="flex h-full cursor-pointer flex-col items-center justify-center gap-4 hover:opacity-60">
              <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border border-solid">
                <Add />
              </div>
              <Typography variant="h6" fontWeight="bold">
                Nova conta
              </Typography>
            </div>
          </Paper>
          {mockedBankAccounts.map((bankAccount) => (
            <AccountItem key={bankAccount.id} bankAccount={bankAccount} />
          ))}
        </Box>
        <section className="flex h-full w-[90%] flex-col gap-4 justify-self-end">
          <Paper className="grid h-24 w-full grid-cols-2 rounded-3xl p-4">
            <main className="flex h-full flex-col justify-between">
              <div className="flex gap-1">
                <Typography className="font-medium opacity-70">
                  Saldo atual
                </Typography>
                <ArrowIcon className="w-3 opacity-40" />
              </div>
              <Typography variant="h6" className="font-semibold">
                R$56.450,00
              </Typography>
            </main>
            <div className="mr-4 flex h-12 w-12 items-center justify-center self-center justify-self-end rounded-full bg-primary">
              <PaidOutlined />
            </div>
          </Paper>
          <Paper className="grid h-24 w-full grid-cols-2 rounded-3xl p-4">
            <main className="flex h-full flex-col justify-between">
              <div className="flex gap-1">
                <Typography className="font-medium opacity-70">
                  Saldo previsto
                </Typography>
                <ArrowIcon className="w-3 opacity-40" />
              </div>
              <Typography variant="h6" className="font-semibold">
                R$56.450,00
              </Typography>
            </main>
            <div className="mr-4 flex h-12 w-12 items-center justify-center self-center justify-self-end rounded-full bg-primary">
              <LocalAtmOutlined />
            </div>
          </Paper>
        </section>
      </main>
    </div>
  );
}
