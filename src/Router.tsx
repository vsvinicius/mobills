import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '@pages/Dashboard';
import BankAccounts from '@pages/BankAccounts';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/accounts" element={<BankAccounts />} />
      <Route path="/transactions" element={<Dashboard />} />
      <Route path="/credit-cards" element={<Dashboard />} />
    </Routes>
  );
}
