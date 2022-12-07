export type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type NewInvoice = {
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  active: boolean;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};

export interface Invoice extends NewInvoice {
  id: string;
}

export type StyledComponentsProps = {
  dark?: boolean;
};
