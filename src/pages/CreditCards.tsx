import InfoItem from '@components/InfoItem';
import CreditCardItem from '@components/credit-card/CreditCardItem';
import Card from '@components/ui/Card';
import SeeMoreMenu from '@components/ui/SeeMoreMenu';
import SwitchButton from '@components/ui/SwitchButton';
import {
  Add,
  CreditCardOutlined,
  LocalAtmOutlined,
  MonetizationOnOutlined,
} from '@mui/icons-material';
import { IconButton, MenuItem, MenuList, Typography } from '@mui/material';

export default function CreditCards() {
  return (
    <div className="h-full w-full p-4">
      <header className="mb-4 mt-24 flex justify-between">
        <Typography variant="h4" className="font-semibold">
          Cartões de crédito
        </Typography>
        <div className="flex gap-3">
          <SwitchButton
            className="h-12"
            buttonNames={['Faturas abertas', 'Faturas fechadas']}
            onChangeButton={() => null}
          />
          <IconButton className="bg-paper text-success w-12">
            <Add />
          </IconButton>
          <SeeMoreMenu className="bg-paper w-12">
            <MenuList>
              <MenuItem>Cartões arquivados</MenuItem>
              <MenuItem>Tipo de visualização</MenuItem>
            </MenuList>
          </SeeMoreMenu>
        </div>
      </header>
      <main className="grid grid-cols-3">
        <div className="col-start-1 col-end-3 grid grid-cols-2 gap-3">
          <Card className="text-success h-[19rem]">
            <div className="flex h-full cursor-pointer flex-col items-center justify-center gap-4 hover:opacity-60">
              <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border border-solid">
                <Add />
              </div>
              <Typography variant="h6" fontWeight="bold">
                Novo cartão de crédito
              </Typography>
            </div>
          </Card>
          <CreditCardItem />
          <CreditCardItem />
          <CreditCardItem />
          <CreditCardItem />
          <CreditCardItem />
          <CreditCardItem />
        </div>
        <section className="col-start-3 row-start-1 flex h-full w-[80%] flex-col gap-4 justify-self-end">
          <InfoItem
            title="Melhor cartão para comprar"
            value={56450}
            icon={<CreditCardOutlined />}
            iconClassName="bg-success"
          />
          <InfoItem
            title="Limite disponível"
            value={56450}
            icon={<MonetizationOnOutlined />}
            iconClassName="bg-success"
          />
          <InfoItem
            title="Valor total"
            value={56450}
            icon={<LocalAtmOutlined />}
            iconClassName="bg-success"
          />
        </section>
      </main>
    </div>
  );
}
