import { v4 as uuidv4 } from 'uuid';

import mastercard from '@assets/icons/mastercard.svg';
import visa from '@assets/icons/visa.svg';
import { Invoice, InvoiceStatus, getMockedInvoice } from '@models/Invoice';

enum CreditCardBrand {
  MASTERCARD = 'mastercard',
  VISA = 'visa',
}

export interface CreditCardInterface {
  brand: CreditCardBrand;
  closingDay: number;
  id: string;
  invoices: Invoice[];
  limitAmount: number;
  name: string;
}

export class CreditCard implements CreditCardInterface {
  brand: CreditCardBrand;
  closingDay: number;
  id: string;
  invoices: Invoice[];
  limitAmount: number;
  name: string;

  constructor({
    brand,
    closingDay,
    id,
    invoices,
    limitAmount,
    name,
  }: CreditCardInterface) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.limitAmount = limitAmount;
    this.closingDay = closingDay;
    this.invoices = invoices;
  }

  get brandIcon(): string {
    return this.brand === CreditCardBrand.VISA ? visa : mastercard;
  }

  get usedAmount(): number {
    return this.invoices.reduce(
      (acc, invoice) =>
        invoice.status === InvoiceStatus.OPEN
          ? acc + invoice.chargeAmount
          : acc,
      0,
    );
  }
}

export function getMockedCreditCard(): CreditCard {
  return new CreditCard({
    brand: CreditCardBrand.MASTERCARD,
    closingDay: 2,
    id: uuidv4(),
    invoices: [
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
    ],
    limitAmount: Math.random() * 10000,
    name: 'Mocked card',
  });
}
