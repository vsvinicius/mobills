import {
  Header,
  Calendar,
  Profile,
  Main,
  MonthlyStats,
} from './styles';

import Button from '../../components/Button';

export default function Home() {

  return (
    <>
      <Header>
        <Calendar >
          Calendar
        </Calendar>
        <Profile>
          <Button>
            DEFINIR MEU PLANEJAMENTO
          </Button>
        </Profile>
      </Header>
      <Main>
        <h1>Dashboard</h1>
        <MonthlyStats />
        <Button>DEFINIR MEU PLANEJAMENTO</Button>
        {/* Varios cards */}
      </Main>
    </>
  );
}
