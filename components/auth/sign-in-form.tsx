"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signInSchema, type SignInRequest } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormData = SignInRequest;

export function SignInForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormData) {
    try {
      setError(null);

      startTransition(async () => {
        try {
          // Call the API route instead of signIn directly
          const response = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email.toLowerCase(),
              password: values.password,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            // Handle different error types
            if (response.status === 400) {
              // Validation error
              setError(data.error || "Invalid input");
            } else if (response.status === 401) {
              // Authentication error
              setError(data.error || "Invalid email or password");
            } else {
              // Server error
              setError(data.error || "Something went wrong. Please try again.");
            }
            return;
          }

          // Success - redirect to home page
          router.refresh();
          router.push("/");
        } catch (fetchError) {
          // Network or other fetch-related errors
          setError(
            "Connection error. Please check your internet and try again.",
          );
          console.error("Sign-in fetch error:", fetchError);
        }
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <div className="text-destructive text-center text-sm">{error}</div>
        )}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
}
