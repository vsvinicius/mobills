import {
  Button,
  Divider,
  LinearProgress,
  MenuItem,
  MenuList,
  Typography,
  linearProgressClasses,
} from '@mui/material';
import dayjs from 'dayjs';

import Card from '@components/ui/Card';
import SeeMoreMenu from '@components/ui/SeeMoreMenu';
import formatToCurrency from '@lib/formatToCurrency';
import { CreditCard } from '@models/CreditCard';

interface CreditCardItemProps {
  creditCard: CreditCard;
}

function CardHeader({ creditCard }: CreditCardItemProps) {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-end gap-2">
        <img
          alt="bank logo"
          src={creditCard.brandIcon}
          style={{
            borderRadius: '50%',
            width: '2rem',
          }}
        />
        <Typography className="font-bold opacity-70" variant="h6">
          {creditCard.name}
        </Typography>
      </div>
      <SeeMoreMenu>
        <MenuList>
          <MenuItem>Editar cartão</MenuItem>
          <MenuItem>Despesas fixas</MenuItem>
          <MenuItem>Gráfico despesas</MenuItem>
          <MenuItem>Histórico de faturas</MenuItem>
          <MenuItem>Arquivar cartão</MenuItem>
        </MenuList>
      </SeeMoreMenu>
    </header>
  );
}

function CardBody({ creditCard }: CreditCardItemProps) {
  const closingDate = dayjs()
    .set('date', creditCard.closingDay)
    .locale('pt-BR')
    .format('L');
  return (
    <main className="px-4">
      <section className="grid grid-cols-2 items-end gap-y-2">
        <Typography className="col-span-2 col-start-1 text-lg font-bold opacity-70">
          Fatura aberta
        </Typography>
        <Typography className="font-semibold opacity-70">
          Valor parcial
        </Typography>
        <Typography className="justify-self-end font-semibold text-red-500">
          {formatToCurrency(creditCard.usedAmount)}
        </Typography>
        <Typography className="font-semibold opacity-70">Fecha em</Typography>
        <Typography className="justify-self-end font-semibold">
          {closingDate}
        </Typography>
      </section>
      <section className="my-3">
        <Typography
          className="font-medium opacity-70"
          variant="body2"
        >{`${formatToCurrency(creditCard.usedAmount)} de ${formatToCurrency(creditCard.limitAmount)}`}</Typography>
        <LinearProgress
          className="h-4 rounded-full bg-white"
          color="success"
          sx={{
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
            },
          }}
          value={(creditCard.usedAmount / creditCard.limitAmount) * 100}
          variant="determinate"
        />
        <Typography
          className="mt-1 font-medium opacity-70"
          variant="body2"
        >{`Limite disponível de ${formatToCurrency(creditCard.limitAmount - creditCard.usedAmount)}`}</Typography>
      </section>
    </main>
  );
}

export default function CreditCardItem({ creditCard }: CreditCardItemProps) {
  return (
    <Card>
      <CardHeader creditCard={creditCard} />
      <CardBody creditCard={creditCard} />
      <Divider />
      <footer className="my-2 flex justify-end px-4">
        <Button className="rounded-full text-success">adicionar despesa</Button>
      </footer>
    </Card>
  );
}
