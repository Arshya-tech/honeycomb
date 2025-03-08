"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

export function SignInForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignInRequest>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInRequest) {
    try {
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
              toast.error(data.error || "Invalid input");
            } else if (response.status === 401) {
              // Authentication error
              toast.error(data.error || "Invalid email or password");
            } else {
              // Server error
              toast.error(
                data.error || "Something went wrong. Please try again.",
              );
            }
            return;
          }

          // Success - redirect to home page
          router.push("/dashboard");
        } catch (fetchError) {
          // Network or other fetch-related errors
          toast.error(
            "Connection error. Please check your internet and try again.",
          );
          console.error("Sign-in fetch error:", fetchError);
        }
      });
    } catch (err) {
      toast.error(
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
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </Form>
  );
}
