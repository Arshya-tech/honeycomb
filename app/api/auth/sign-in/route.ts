import { signIn } from "@/auth";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

// Define validation schema for sign-in request
const signInSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export type SignInRequest = z.infer<typeof signInSchema>;

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = signInSchema.safeParse(body);

    if (!validationResult.success) {
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
          code: "VALIDATION_ERROR",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const { email, password } = validationResult.data;

    // Check if user with email exists
    const [existingUser] = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
      })
      .from(users)
      .where(eq(users.email, email));

    if (!existingUser) {
      return new Response(
        JSON.stringify({
          error: "Invalid credentials",
          code: "INVALID_CREDENTIALS",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Attempt to sign in
    const signInResult = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // Handle authentication errors
    if (!signInResult?.ok) {
      // Map authentication errors to user-friendly messages
      const errorCode =
        signInResult?.error === "CredentialsSignin"
          ? "INVALID_CREDENTIALS"
          : "AUTH_ERROR";

      return new Response(
        JSON.stringify({
          error: "Invalid credentials",
          code: errorCode,
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Return success response with user data
    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
          role: existingUser.role,
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    );
  } catch (error) {
    console.error("Sign-in error:", error);

    return new Response(
      JSON.stringify({
        error: "Internal server error",
        code: "INTERNAL_ERROR",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
