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

const CustomerForm = () => {
  const form = useForm();
  //const [state, formAction] = useFormState(createInvoice, initialState);
  return (
    <Form {...form}>
      <form className="space-y-8">
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
        </div>
      </form>
    </Form>
  );
};

export default CustomerForm;
