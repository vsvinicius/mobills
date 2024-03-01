import Card from '@components/ui/Card';
import SeeMoreMenu from '@components/ui/SeeMoreMenu';
import {
  Button,
  Divider,
  LinearProgress,
  MenuItem,
  MenuList,
  Typography,
  linearProgressClasses,
} from '@mui/material';
// import visa from '@assets/icons/visa.svg';
import mastercard from '@assets/icons/mastercard.svg';
import formatToCurrency from '@lib/formatToCurrency';
import dayjs from 'dayjs';

// interface CreditCardItemProps {}

function CardHeader() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-end gap-2">
        <img
          src={mastercard}
          alt="bank logo"
          style={{
            width: '2rem',
            borderRadius: '50%',
          }}
        />
        <Typography variant="h6" className="font-bold opacity-70">
          Credit card name
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

function CardBody() {
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
          {formatToCurrency(132.45)}
        </Typography>
        <Typography className="font-semibold opacity-70">Fecha em</Typography>
        <Typography className="justify-self-end font-semibold">
          {dayjs().format('L')}
        </Typography>
      </section>
      <section className="my-3">
        <Typography
          variant="body2"
          className="font-medium opacity-70"
        >{`${formatToCurrency(500)} de ${formatToCurrency(1000)}`}</Typography>
        <LinearProgress
          variant="determinate"
          value={47}
          className="h-4 rounded-full bg-white"
          color="success"
          sx={{
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
            },
          }}
        />
        <Typography
          variant="body2"
          className="mt-1 font-medium opacity-70"
        >{`Limite disponível de ${formatToCurrency(1500)}`}</Typography>
      </section>
    </main>
  );
}

export default function CreditCardItem() {
  return (
    <Card>
      <CardHeader />
      <CardBody />
      <Divider />
      <footer className="my-2 flex justify-end px-4">
        <Button className="text-success rounded-full">adicionar despesa</Button>
      </footer>
    </Card>
  );
}
