import {
  Header,
  Calendar,
  Profile,
  Main,
  MonthlyStats,
  Button
} from './styles';
export default function Home() {

  return (
    <>
      <Header>
        <Calendar >
          Calendar
        </Calendar>
        <Profile >
          Profile settings
        </Profile>
      </Header>
      <Main>
        <h1>Dashboard</h1>
        <MonthlyStats />
        <Button>Meu desempenho</Button>
        {/* Varios cards */}
      </Main>
    </>
  );
}
