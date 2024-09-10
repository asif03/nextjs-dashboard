import Breadcrumbs from "@/components/breadcrumbs";
import CustomerForm from "@/components/customers/customer-form";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { id: 1, label: "Dashboard", href: "/dashboard" },
          { id: 2, label: "Customers", href: "/dashboard/customers" },
          {
            id: 3,
            label: "Create Customer",
            href: "/dashboard/customers/create",
            active: true,
          },
        ]}
      />
      <CustomerForm />
    </>
  );
}
