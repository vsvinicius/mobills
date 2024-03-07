import { useState } from 'react';

import {
  Add,
  CreditCardOutlined,
  LocalAtmOutlined,
  MonetizationOnOutlined,
} from '@mui/icons-material';
import {
  IconButton,
  MenuItem,
  MenuList,
  Select,
  Switch,
  Typography,
} from '@mui/material';

import InfoItem from '@components/InfoItem';
import CreditCardItem from '@components/credit-card/CreditCardItem';
import ArrowIcon from '@components/ui/ArrowIcon';
import Card from '@components/ui/Card';
import Menu from '@components/ui/Menu';
import { cn } from '@lib/classnames';
import { ArrowIconPosition } from '@lib/enums';
import formatToCurrency from '@lib/formatToCurrency';
import { OptionType } from '@lib/types';
import { getMockedCreditCard } from '@models/CreditCard';

const CREDIT_CARDS = [
  getMockedCreditCard(),
  getMockedCreditCard(),
  getMockedCreditCard(),
  getMockedCreditCard(),
];
type MenuItemOption = OptionType & { className?: string };

const MENU_ITEMS: MenuItemOption[] = [
  // {
  //   className: 'bg-primary hover:bg-primary-dark',
  //   label: 'Transações',
  //   value: 'transactions',
  // },
  {
    className: 'bg-red-500 hover:bg-red-700',
    label: 'Despesas',
    value: 'outcomes',
  },
  {
    className: 'bg-green-500 hover:bg-green-700',
    label: 'Receitas',
    value: 'incomes',
  },
  // {
  //   className: 'bg-blue-500 hover:bg-blue-700',
  //   label: 'Transferências',
  //   value: 'transfers',
  // },
];

export default function Transactions() {
  const [selectedView, setSelectedView] = useState<MenuItemOption>(
    MENU_ITEMS[0],
  );

  function handleChangeOption(option: MenuItemOption) {
    setSelectedView(option);
  }

  return (
    <div className="h-full w-full p-4">
      <header className="mb-4 mt-24 flex justify-between">
        <Menu
          buttonClassName={cn(
            'bg-primary hover:bg-primary-dark min-w-48',
            selectedView.className,
          )}
          buttonLabel={
            <div className="flex w-full items-center justify-between gap-2">
              <ArrowIcon className="w-4" position={ArrowIconPosition.DOWN} />
              <Typography
                className="w-full font-semibold capitalize"
                variant="h6"
              >
                {selectedView.label}
              </Typography>
            </div>
          }
          menuClassName="mt-2"
        >
          {MENU_ITEMS.map((menuItem) => (
            <MenuItem
              className="px-8 py-4"
              key={menuItem.value}
              onClick={() => handleChangeOption(menuItem)}
            >
              <Typography>{menuItem.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
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
