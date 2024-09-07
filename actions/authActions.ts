"use server";

import { FormState, signIn, SignupFormSchema } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import prisma from "@/lib/db";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  const userIsExists = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (userIsExists) {
    return {
      message: "User already taken.",
    };
  }

  const user = await prisma.users.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  if (user) {
    return {
      message: "User Created Successfully.",
    };
  }
  console.log(user);
}
