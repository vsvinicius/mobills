import {
  Add,
  LocalAtmOutlined,
  PaidOutlined,
  TrendingUpRounded,
} from '@mui/icons-material';
import { IconButton, MenuItem, MenuList, Typography } from '@mui/material';

import InfoItem from '@components/InfoItem';
import AccountItem from '@components/bank-account/BankAccountItem';
import ArrowIcon from '@components/ui/ArrowIcon';
import Card from '@components/ui/Card';
import MonthCalendar from '@components/ui/MonthCalendar';
import SeeMoreMenu from '@components/ui/SeeMoreMenu';
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
      <header className="flex h-40 flex-col justify-between">
        <MonthCalendar className="flex justify-center" />
        <div className="mb-4 flex justify-between">
          <Typography className="font-semibold" variant="h4">
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
      </header>
      <main className="grid grid-cols-3">
        <section className="col-start-1 col-end-3 grid grid-cols-2 gap-3">
          <Card className="text-primary">
            <div className="flex h-full cursor-pointer flex-col items-center justify-center gap-4 hover:opacity-60">
              <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border border-solid">
                <Add />
              </div>
              <Typography fontWeight="bold" variant="h6">
                Nova conta
              </Typography>
            </div>
          </Card>
          {mockedBankAccounts.map((bankAccount) => (
            <AccountItem bankAccount={bankAccount} key={bankAccount.id} />
          ))}
        </section>
        <section className="flex h-full w-[90%] flex-col gap-4 justify-self-end">
          <InfoItem
            icon={<PaidOutlined />}
            title={
              <div className="flex gap-1">
                <Typography className="text-nowrap font-medium opacity-70">
                  Saldo atual
                </Typography>
                <ArrowIcon className="w-3 opacity-40" />
              </div>
            }
            value={56450}
          />
          <InfoItem
            icon={<LocalAtmOutlined />}
            title={
              <div className="flex gap-1">
                <Typography className="text-nowrap font-medium opacity-70">
                  Saldo previsto
                </Typography>
                <ArrowIcon className="w-3 opacity-40" />
              </div>
            }
            value={56450}
          />
        </section>
      </main>
    </div>
  );
}
