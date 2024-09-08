"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { signup } from "@/actions/authActions";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle } from "lucide-react";
import { lusitana } from "../ui/fonts";

const SignupForm = () => {
  const form = useForm();

  const { pending } = useFormStatus();

  const [state, formAction] = useFormState(signup, undefined);

  function AlertDestructive({ message }: { message: string }) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-2">
      <h1 className={`${lusitana.className} my-3 text-2xl`}>
        Please enter info to continue.
      </h1>
      {state?.message && <AlertDestructive message={state?.message} />}
      <Form {...form}>
        <form action={formAction} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input id="name" name={field.name} placeholder="Name" />
                </FormControl>
                {state?.errors?.name && (
                  <FormMessage>{state.errors.name}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    name={field.name}
                    type="email"
                    placeholder="Email"
                  />
                </FormControl>
                {state?.errors?.email && (
                  <FormMessage>{state.errors.email}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    name={field.name}
                    type="password"
                    placeholder="Password"
                  />
                </FormControl>
                {state?.errors?.password && (
                  <FormMessage>
                    <p>Password must:</p>
                    <ul>
                      {state.errors.password.map((error) => (
                        <li key={error}>- {error}</li>
                      ))}
                    </ul>
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <Button disabled={pending} type="submit">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
