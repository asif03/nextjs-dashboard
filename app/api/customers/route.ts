import prisma from "@/lib/db";

export const getAllCustomers = async () => {
  const res = await prisma.customer.findMany();

  //console.log(res);
  return res;
};
