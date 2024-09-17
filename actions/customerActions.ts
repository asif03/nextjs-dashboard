"use server";

import { date, z } from "zod";

const formSchema = z.object({
  id: z.string(),
  email: z.string().email({ message: "Please enter a valid email." }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
    avatar: z.
  date: z.string(),
});

export type State = {
  errors?: {
    email?: string[];
    name?: string[];
    imageUrl?: string[];
  };
  message?: string | null;
};

const CreateCustomer = formSchema.omit({ id: true, date: true });
//const UpdateInvoice = formSchema.omit({ date: true, id: true });

export const createCustomer = async (prevState: State, formData: FormData) => {
  // Validate form fields using Zod
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    imageUrl: formData.get("avatar"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    };
  }
};
