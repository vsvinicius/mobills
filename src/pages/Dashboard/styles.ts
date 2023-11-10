import styled from 'styled-components';
import { devices } from '../../assets/styles/breakpoints';

import { Container } from '../../components/Container';


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`;

export const Calendar = styled.div`
  width:200px;
  height: 50px;
  margin-left: 26rem;
`;

export const Profile = styled.div`
  font-weight: bold;
  width:200px;
  height: 50px;
  margin-right: 2rem;
`;

export const Main = styled.main`
  margin-left: 20px;
  margin-right: 20px;
  `;

export const MonthlyStats = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem; 
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const StatsContainer = styled(Container)`
  min-width: 12rem;
  max-width: 50%;
  flex-grow: 1;
  height: 5rem;
  
  @media ${devices.laptop} {
    min-width: calc(50% - 3rem);
  }
`;

export const Button = styled.div``;
