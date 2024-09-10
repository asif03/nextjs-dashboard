import React from "react";
import { getAllCustomers } from "@/app/api/customers/route";
import Breadcrumbs from "@/components/breadcrumbs";
import { lusitana } from "@/components/ui/fonts";
import Search from "@/components/search";
import { CreateCustomerButton } from "./buttons";

interface Customer {
  customers: ICustomer[];
}

const Customers = async () => {
  const customers = await getAllCustomers();

  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { id: 1, label: "Dashboard", href: "/dashboard" },
          {
            id: 2,
            label: "Customers",
            href: "/dashboard/customers",
            active: true,
          },
        ]}
      />
      <div className="flex w-full items-center justify-between py-2">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomerButton />
      </div>
    </div>
  );
};

export default Customers;
