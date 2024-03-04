import { Navigate, Route, Routes } from 'react-router-dom';

import BankAccounts from '@pages/BankAccounts';
import CreditCards from '@pages/CreditCards';
import Dashboard from '@pages/Dashboard';

export default function Router() {
  return (
    <Routes>
      <Route element={<Navigate to="/dashboard" />} path="/" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<BankAccounts />} path="/accounts" />
      <Route element={<Dashboard />} path="/transactions" />
      <Route element={<CreditCards />} path="/credit-cards" />
    </Routes>
  );
}
