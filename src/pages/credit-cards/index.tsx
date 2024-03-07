import {
  Add,
  CreditCardOutlined,
  LocalAtmOutlined,
  MonetizationOnOutlined,
} from '@mui/icons-material';
import { IconButton, MenuItem, MenuList, Typography } from '@mui/material';

import InfoItem from '@components/InfoItem';
import CreditCardItem from '@components/credit-card/CreditCardItem';
import Card from '@components/ui/Card';
import SeeMoreMenu from '@components/ui/SeeMoreMenu';
import SwitchButton from '@components/ui/SwitchButton';
import formatToCurrency from '@lib/formatToCurrency';
import { getMockedCreditCard } from '@models/CreditCard';

const CREDIT_CARDS = [
  getMockedCreditCard(),
  getMockedCreditCard(),
  getMockedCreditCard(),
  getMockedCreditCard(),
];

export default function CreditCards() {
  return (
    <div className="h-full w-full p-4">
      <header className="mb-4 mt-24 flex justify-between">
        <Typography className="font-semibold" variant="h4">
          Cartões de crédito
        </Typography>
        <div className="flex gap-3">
          <SwitchButton
            buttonNames={['Faturas abertas', 'Faturas fechadas']}
            className="h-12"
            onChangeButton={() => null}
          />
          <IconButton className="w-12 bg-paper text-success">
            <Add />
          </IconButton>
          <SeeMoreMenu className="w-12 bg-paper">
            <MenuList>
              <MenuItem>Cartões arquivados</MenuItem>
              <MenuItem>Tipo de visualização</MenuItem>
            </MenuList>
          </SeeMoreMenu>
        </div>
      </header>
      <main className="grid grid-cols-3">
        <div className="col-start-1 col-end-3 grid grid-cols-2 gap-3">
          <Card className="text-success">
            <div className="flex h-full cursor-pointer flex-col items-center justify-center gap-4 hover:opacity-60">
              <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border border-solid">
                <Add />
              </div>
              <Typography fontWeight="bold" variant="h6">
                Novo cartão de crédito
              </Typography>
            </div>
          </Card>
          {CREDIT_CARDS.map((creditCard) => (
            <CreditCardItem creditCard={creditCard} key={creditCard.id} />
          ))}
        </div>
        <section className="col-start-3 row-start-1 flex h-full w-[80%] flex-col gap-4 justify-self-end">
          <InfoItem
            icon={<CreditCardOutlined />}
            iconClassName="bg-success"
            title="Melhor cartão para comprar"
            value={CREDIT_CARDS[0].name}
          />
          <InfoItem
            icon={<MonetizationOnOutlined />}
            iconClassName="bg-success"
            title="Limite disponível"
            value={formatToCurrency(56450)}
          />
          <InfoItem
            icon={<LocalAtmOutlined />}
            iconClassName="bg-success"
            title="Valor total"
            value={formatToCurrency(56450)}
          />
        </section>
      </main>
    </div>
  );
}
