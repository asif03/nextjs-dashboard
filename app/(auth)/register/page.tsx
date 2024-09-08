import SignupForm from "@/components/auth/signup-form";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <SignupForm />
      <p className="text-sm">
        Already have an account?{" "}
        <Link className="text-blue-500" href="/login">
          Signin
        </Link>{" "}
        here.
      </p>
    </div>
  );
};

export default RegisterPage;
