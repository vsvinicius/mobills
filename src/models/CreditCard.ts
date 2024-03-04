import { v4 as uuidv4 } from 'uuid';
import visa from '@assets/icons/visa.svg';
import mastercard from '@assets/icons/mastercard.svg';
import { Invoice, InvoiceStatus, getMockedInvoice } from '@models/Invoice';

enum CreditCardBrand {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
}

export interface CreditCardInterface {
  id: string;
  name: string;
  brand: CreditCardBrand;
  limitAmount: number;
  closingDay: number;
  invoices: Invoice[];
}

export class CreditCard implements CreditCardInterface {
  id: string;
  name: string;
  brand: CreditCardBrand;
  limitAmount: number;
  closingDay: number;
  invoices: Invoice[];

  constructor({
    id,
    name,
    brand,
    limitAmount,
    closingDay,
    invoices,
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
    id: uuidv4(),
    name: 'Mocked card',
    brand: CreditCardBrand.MASTERCARD,
    closingDay: 2,
    limitAmount: Math.random() * 10000,
    invoices: [
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
      getMockedInvoice(),
    ],
  });
}
