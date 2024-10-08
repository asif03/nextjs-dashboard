import prisma from "@/lib/db";

export const fetchFilteredInvoices = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const ITEMS_PER_PAGE = 6;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const result = await prisma.$queryRawUnsafe(
      `SELECT invoices.id, invoices.amount, invoices.status, customers.name, customers.email, customers.image_url, invoices.created_at
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id`
    );

    /*const result = await prisma.$queryRaw`SELECT
          invoices.id,
          invoices.amount,
          invoices.status,
          customers.name,
          customers.email,
          customers.image_url
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        WHERE
          customers.name ILIKE '%${query}%'`;*/
    return result;
  } catch (error) {
    console.error("Database Error:", error);
    //throw new Error("Failed to fetch invoices.");
  }
};

const ITEMS_PER_PAGE = 6;
export async function fetchInvoicesPages(query: string) {
  try {
    const count = await prisma.$queryRawUnsafe(
      `SELECT COUNT(*) as cnt
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id`
    );

    console.log(count);
    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);

    console.log(totalPages);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}

export async function fetchInvoiceById(id: string) {
  const user = await prisma.invoices.findUnique({
    where: {
      id: id,
    },
  });
}
