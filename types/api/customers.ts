interface ICustomer {
  id: number;
  name: string;
  email: string;
  imageUrl?: string;
}

interface IInvoice {
  id: number;
  customerId: number;
  amount: number;
  status: string;
}
