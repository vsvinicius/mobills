import { Button, Divider, MenuItem, MenuList, Typography } from '@mui/material';

import Card from '@components/ui/Card';
import SeeMoreMenu from '@components/ui/SeeMoreMenu';
import { cn } from '@lib/classnames';
import formatToCurrency from '@lib/formatToCurrency';
import { BankAccount } from '@models/BankAccount';

interface AccountItemProps {
  bankAccount: BankAccount;
}

function CardHeader({ bankAccount: { logoSrc, name } }: AccountItemProps) {
  return (
    <header className="flex justify-between p-4 pb-6">
      <div className="flex items-end gap-2">
        <img
          alt="bank logo"
          src={logoSrc}
          style={{ borderRadius: '50%', width: '2rem' }}
        />
        <Typography className="font-bold opacity-70" variant="h6">
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
  );
}

function CardBody({ bankAccount }: AccountItemProps) {
  const { currentBalance, expectedBalance } = bankAccount;
  return (
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
  );
}

export default function AccountItem({ bankAccount }: AccountItemProps) {
  return (
    <Card>
      <CardHeader bankAccount={bankAccount} />
      <CardBody bankAccount={bankAccount} />
      <Divider />
      <footer className="my-2 flex justify-end px-4">
        <Button className="rounded-full">adicionar despesa</Button>
      </footer>
    </Card>
  );
}
