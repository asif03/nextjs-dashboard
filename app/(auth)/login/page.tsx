import LoginForm from "@/components/auth/login-form";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <LoginForm />
      <p className="text-sm">
        Don't have account?{" "}
        <Link className="text-blue-500" href="/register">
          Signup
        </Link>{" "}
        here.
      </p>
    </div>
  );
};

export default LoginPage;
