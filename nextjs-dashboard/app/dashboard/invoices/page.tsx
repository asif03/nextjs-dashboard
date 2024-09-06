import { getAllCustomers } from "@/app/api/customers/route";
import Breadcrumbs from "@/components/breadcrumbs";
import Search from "@/components/search";
import { lusitana } from "@/components/ui/fonts";
import { CreateInvoice } from "./buttons";
import { InvoicesTableSkeleton } from "@/components/skeletons";
import { Suspense } from "react";
import InvoicesTable from "./table";
import Pagination from "./pagination";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { id: 1, label: "Dashboard", href: "/dashboard" },
          {
            id: 2,
            label: "Invoices",
            href: "/dashboard/invoices",
            active: true,
          },
        ]}
      />
      <div className="flex w-full items-center justify-between py-2">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        {<InvoicesTable query={query} currentPage={currentPage} />}
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
