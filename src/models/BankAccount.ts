import { v4 as uuidv4 } from 'uuid';
import bankIcon from '@assets/images/c6-bank.png';

export interface BankAccountInterface {
  id: string;
  name: string;
  logoSrc: string;
  currentBalance: number;
  expectedBalance: number;
}

export class BankAccount implements BankAccountInterface {
  name = '';
  logoSrc = '';
  expectedBalance = 0;
  id = '';
  currentBalance = 0;
  constructor({
    id,
    name,
    logoSrc,
    expectedBalance,
    currentBalance,
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
    id: uuidv4(),
    name: 'Mocked Bank',
    currentBalance: Math.random() * 100,
    expectedBalance: Math.random() * 100,
    logoSrc: bankIcon,
  });
}
