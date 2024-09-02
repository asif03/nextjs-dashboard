import React from "react";
import { getAllCustomers } from "@/app/api/customers/route";

interface Customer {
  customers: ICustomer[];
}

const Customers = async () => {
  const customers = await getAllCustomers();

  console.log(customers);

  return (
    <div>
      {customers.map((customer: Customer) => (
        <li key={customer.id}>{customer.name}</li>
      ))}
    </div>
  );
};

export default Customers;
