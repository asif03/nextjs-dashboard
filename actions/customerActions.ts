"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import fs from "node:fs/promises";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpg", "image/jpeg"];

export type State = {
  errors?: {
    email?: string[];
    name?: string[];
    avatar?: string[];
  };
  message?: string | null;
};

const formSchema = z.object({
  id: z.string(),
  email: z.string().email({ message: "Please enter a valid email." }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  avatar: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File must be a PNG"),
  date: z.string(),
});

const CreateCustomer = formSchema.omit({ id: true, date: true });
//const UpdateInvoice = formSchema.omit({ date: true, id: true });

export const createCustomer = async (prevState: State, formData: FormData) => {
  // Validate form fields using Zod
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    avatar: formData.get("avatar") as File,
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    };
  }

  const orgFileName = validatedFields.data.avatar.name;

  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const filename = `${orgFileName.replace(/\.[^/.]+$/, "")}-${uniqueSuffix}}`;

  const arrayBuffer = await validatedFields.data.avatar.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  await fs.writeFile(`./public/uploads/${filename}`, buffer);

  //console.log(validatedFields.data);
  // Mutate data
  const { name, email, avatar } = validatedFields.data;
};
