"use client";
import { createTodo } from "@/actions/todoActions";
import { useFormState, useFormStatus } from "react-dom";

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
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <div className="py-2">
      <form action={formAction}>
        <label htmlFor="todo">Enter Task</label>
        <input type="text" id="todo" name="todo" />
        <SubmitButton />
        <p aria-live="polite" role="status">
          {state?.message}
        </p>
      </form>
    </div>
  );
};

export default CreateTodoForm;
