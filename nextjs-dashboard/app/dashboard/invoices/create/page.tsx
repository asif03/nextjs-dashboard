import { getAllCustomers } from "@/app/api/customers/route";
import Breadcrumbs from "@/components/breadcrumbs";
import InvoiceCreateForm from "@/components/invoices/create-form";

export default async function Page() {
  const customers = await getAllCustomers();
  console.log(customers);
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { id: 1, label: "Dashboard", href: "/dashboard" },
          { id: 2, label: "Invoices", href: "/dashboard/invoices" },
          {
            id: 3,
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <ul>
        {customers.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {<InvoiceCreateForm customers={customers} />}
    </>
  );
}
