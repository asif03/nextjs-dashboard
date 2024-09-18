"use client";
import { useFormState } from "react-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { createCustomer, State } from "@/actions/customerActions";
import { Button } from "../ui/button";

const CustomerForm = () => {
  const form = useForm();
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(createCustomer, initialState);
  return (
    <>
      <Form {...form}>
        <form action={formAction} className="space-y-8">
          <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
                      placeholder="example@gmail.com"
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
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input id="avatar" type="file" name={field.name} />
                  </FormControl>
                  {state?.errors?.avatar && (
                    <FormMessage>{state.errors.avatar}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <div className="pt-2">
              <Button type="submit">Save</Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CustomerForm;
