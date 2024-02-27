import SeeMoreMenu from '@components/SeeMoreMenu';
import { cn } from '@lib/classnames';
import formatToCurrency from '@lib/formatToCurrency';
import { BankAccount } from '@models/BankAccount';
import {
  Button,
  Divider,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material';

interface AccountItemProps {
  bankAccount: BankAccount;
}

export default function AccountItem({ bankAccount }: AccountItemProps) {
  const { name, logoSrc, currentBalance, expectedBalance } = bankAccount;

  return (
    <Paper className="h-60 w-[48.95%] rounded-3xl font-bold">
      <header className="flex justify-between p-4 pb-6">
        <div className="flex items-end gap-2">
          <img
            src={logoSrc}
            alt="bank logo"
            style={{ width: '2rem', borderRadius: '50%' }}
          />
          <Typography variant="h6" className="font-bold opacity-70">
            {name}
          </Typography>
        </div>
        <SeeMoreMenu>
          <MenuList>
            <MenuItem>Editar</MenuItem>
            <MenuItem>Arquivar</MenuItem>
            <MenuItem>Transações</MenuItem>
            <MenuItem>Reajuste de saldo</MenuItem>
          </MenuList>
        </SeeMoreMenu>
      </header>
      <main className="mb-10 grid grid-cols-2 grid-rows-2 gap-y-4 px-4">
        <Typography className="font-bold">Saldo atual</Typography>
        <Typography
          className={cn(
            'place-self-end font-bold',
            currentBalance >= 0 ? 'text-green-600' : 'text-red-500',
          )}
        >
          {formatToCurrency(currentBalance)}
        </Typography>
        <Typography className="font-bold">Saldo previsto</Typography>
        <Typography
          className={cn(
            'place-self-end font-bold',
            currentBalance >= 0 ? 'text-green-600' : 'text-red-500',
          )}
        >
          {formatToCurrency(expectedBalance)}
        </Typography>
      </main>
      <Divider />
      <footer className="mt-2 flex justify-end px-4">
        <Button className="rounded-full">adicionar despesa</Button>
      </footer>
    </Paper>
  );
}
