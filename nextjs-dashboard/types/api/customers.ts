interface ICustomer {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
}

interface IInvoice {
  id: string;
  customerId: string;
  amount: number;
  status: string;
}
