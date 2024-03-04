import { v4 as uuidv4 } from 'uuid';

export enum InvoiceStatus {
  CLOSED = 'closed',
  OPEN = 'open',
}

export interface InvoiceInterface {
  chargeAmount: number;
  id: string;
  paidAmount: number;
  status: InvoiceStatus;
}

export class Invoice implements InvoiceInterface {
  chargeAmount: number;
  id: string;
  paidAmount: number;
  status: InvoiceStatus;

  constructor({ chargeAmount, id, paidAmount, status }: InvoiceInterface) {
    this.id = id;
    this.status = status;
    this.chargeAmount = chargeAmount;
    this.paidAmount = paidAmount;
  }
}

export function getMockedInvoice(): Invoice {
  return new Invoice({
    chargeAmount: Math.random() * 1000,
    id: uuidv4(),
    paidAmount: Math.random() * 1000,
    status:
      Math.ceil(Math.random() * 10) % 2 === 0
        ? InvoiceStatus.OPEN
        : InvoiceStatus.CLOSED,
  });
}
