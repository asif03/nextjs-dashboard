import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

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
    const result = await prisma.$queryRaw`SELECT
          invoices.id,
          invoices.amount,
          invoices.status,
          customers.name,
          customers.email,
          customers.image_url
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        WHERE
          customers.name LIKE '%${query}%'
        LIMIT ${ITEMS_PER_PAGE}::int OFFSET ${offset}::int`;
    return result;
  } catch (error) {
    console.error("Database Error:", error);
    //throw new Error("Failed to fetch invoices.");
  }
};
