import {
  Header,
  Calendar,
  Profile,
  Main,
  MonthlyStats,
  StatsContainer
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
        <MonthlyStats >
          <StatsContainer >
            Contas a pagar
          </StatsContainer>
          <StatsContainer >
            Contas a pagar
          </StatsContainer>
          <StatsContainer >
            Contas a pagar
          </StatsContainer>
          <StatsContainer >
            Contas a pagar
          </StatsContainer>
        </MonthlyStats>

        {/* Varios cards */}
      </Main >
    </>
  );
}
