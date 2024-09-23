import Image from "next/image";

//import { fetchFilteredInvoices } from "@/app/lib/data";
import InvoiceStatus from "./status";
import { UpdateInvoice } from "./buttons";
import { formatCurrency, formatDateToLocal } from "@/lib/utils";
import { fetchFilteredInvoices } from "@/app/api/invoices/route";

const customers = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    id: 1,
    customer_id: 1,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    id: 2,
    customer_id: 2,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    id: 3,
    customer_id: 3,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    id: 4,
    customer_id: 4,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
];

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  console.log(currentPage);
  const invoices = await fetchFilteredInvoices(query, currentPage);

  console.log(invoices);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden"></div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
