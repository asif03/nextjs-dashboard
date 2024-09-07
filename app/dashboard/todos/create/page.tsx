import Breadcrumbs from "@/components/breadcrumbs";
import CreateTodoForm from "@/components/todos/create-form";
import React from "react";

const Page = () => {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { id: 1, label: "Dashboard", href: "/dashboard" },
          { id: 2, label: "Tasks", href: "/dashboard/todos" },
          {
            id: 3,
            label: "Create Todo",
            href: "/dashboard/todos/create",
            active: true,
          },
        ]}
      />
      <CreateTodoForm />
    </div>
  );
};

export default Page;
