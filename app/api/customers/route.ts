import prisma from "@/lib/db";

export const getAllCustomers = async () => {
  const res = await prisma.customers.findMany();

  //console.log(res);
  return res;
};
