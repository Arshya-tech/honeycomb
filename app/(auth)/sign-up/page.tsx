import { Metadata } from "next";

import { AuthCard } from "@/components/auth/auth-card";
import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <AuthCard
      title="Create an account"
      description="Join our community today and start your journey to financial literacy in a fun and engaging way."
    >
      <SignUpForm />
    </AuthCard>
  );
}
