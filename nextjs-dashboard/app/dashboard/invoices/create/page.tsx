import { getAllCustomers } from "@/app/api/customers/route";
import Breadcrumbs from "@/components/breadcrumbs";
import InvoiceCreateForm from "@/components/invoices/create-form";

export default function Page() {
  const customers = getAllCustomers();
  console.log(customers);
  return (
    <div>
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
      <InvoiceCreateForm customers={customers} />
    </div>
  );
}
