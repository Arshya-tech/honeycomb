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
      description="Welcome back! Enter your credentials to access your account and continue your financial journey."
    >
      <SignInForm />
    </AuthCard>
  );
}
