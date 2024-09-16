"use server";

import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  email: z.string().email({ message: "Please enter a valid email." }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  date: z.string(),
});

export type State = {
  errors?: {
    customerId?: number[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
