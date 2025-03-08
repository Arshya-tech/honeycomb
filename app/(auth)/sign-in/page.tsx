import { Metadata } from "next";

import { AuthCard } from "@/components/auth/auth-card";
import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <AuthCard
      title="Welcome back"
      description="Enter your email below to sign in to your account"
    >
      <SignInForm />
    </AuthCard>
  );
}
