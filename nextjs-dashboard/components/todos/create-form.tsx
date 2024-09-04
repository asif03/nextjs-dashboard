"use client";
import { createTodo } from "@/actions/todoActions";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

const CreateTodoForm = () => {
  const [state, formAction] = useActionState(createTodo, initialState);

  return (
    <div className="py-2">
      <form action={formAction}>
        <label htmlFor="todo">Enter Task</label>
        <input type="text" id="todo" name="todo" required />
        <SubmitButton />
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </form>
    </div>
  );
};

export default CreateTodoForm;
