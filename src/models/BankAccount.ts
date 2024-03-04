import { v4 as uuidv4 } from 'uuid';

import bankIcon from '@assets/images/c6-bank.png';

export interface BankAccountInterface {
  currentBalance: number;
  expectedBalance: number;
  id: string;
  logoSrc: string;
  name: string;
}

export class BankAccount implements BankAccountInterface {
  currentBalance = 0;
  expectedBalance = 0;
  id = '';
  logoSrc = '';
  name = '';
  constructor({
    currentBalance,
    expectedBalance,
    id,
    logoSrc,
    name,
  }: BankAccountInterface) {
    this.id = id;
    this.name = name;
    this.logoSrc = logoSrc;
    this.expectedBalance = expectedBalance;
    this.currentBalance = currentBalance;
  }
}

export function getMockedBankAccount(): BankAccount {
  return new BankAccount({
    currentBalance: Math.random() * 100,
    expectedBalance: Math.random() * 100,
    id: uuidv4(),
    logoSrc: bankIcon,
    name: 'Mocked Bank',
  });
}
