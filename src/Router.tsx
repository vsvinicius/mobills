import { Navigate, Route, Routes } from 'react-router-dom';

import BankAccounts from '@pages/bank-accounts';
import CreditCards from '@pages/credit-cards';
import Dashboard from '@pages/dashboard';
import Transactions from '@pages/transactions';

export default function Router() {
  return (
    <Routes>
      <Route element={<Navigate to="/dashboard" />} path="/" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<BankAccounts />} path="/accounts" />
      <Route element={<Transactions />} path="/transactions" />
      <Route element={<CreditCards />} path="/credit-cards" />
    </Routes>
  );
}
