import { v4 as uuidv4 } from 'uuid';

export enum InvoiceStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

export interface InvoiceInterface {
  id: string;
  status: InvoiceStatus;
  chargeAmount: number;
  paidAmount: number;
}

export class Invoice implements InvoiceInterface {
  id: string;
  status: InvoiceStatus;
  chargeAmount: number;
  paidAmount: number;

  constructor({ id, status, chargeAmount, paidAmount }: InvoiceInterface) {
    this.id = id;
    this.status = status;
    this.chargeAmount = chargeAmount;
    this.paidAmount = paidAmount;
  }
}

export function getMockedInvoice(): Invoice {
  return new Invoice({
    id: uuidv4(),
    status:
      Math.ceil(Math.random() * 10) % 2 === 0
        ? InvoiceStatus.OPEN
        : InvoiceStatus.CLOSED,
    chargeAmount: Math.random() * 1000,
    paidAmount: Math.random() * 1000,
  });
}
