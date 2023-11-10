import {
  Header,
  Calendar,
  Profile,
  Main,
  MonthlyStats,
} from './styles';

import Button from '../../components/Button';
import { Container } from '../../components/Container';

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
        {/* <MonthlyStats /> */}
        <div style={{ display: 'flex', width: '100%', gap: '12px', alignItems: 'center', marginTop: 10 }}>

          <Container style={{ width: '25%', height: 90 }}>
            Contas a pagar
          </Container>
          <Container style={{ width: '25%', height: 90 }}>
            Contas a pagar
          </Container>
          <Container style={{ width: '25%', height: 90 }}>
            Contas a pagar
          </Container>
          <Container style={{ width: '25%', height: 90 }}>
            Contas a pagar
          </Container>
        </div>
        {/* Varios cards */}
      </Main>
    </>
  );
}
