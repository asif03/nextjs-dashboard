import prisma from "@/lib/db";

export const getAllCustomers = async () => {
  const res = await prisma.User.findMany();

  return res;
};
