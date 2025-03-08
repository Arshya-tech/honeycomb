import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { registerSchema } from "@/lib/validations/auth";

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = registerSchema.safeParse(body);

    if (!validationResult.success) {
      console.error(validationResult.error.flatten().fieldErrors);

      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const { email, password, name } = validationResult.data;

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .then((res) => res[0]);

    if (existingUser) {
      return new Response(
        JSON.stringify({
          error: "Email already registered",
          code: "EMAIL_EXISTS",
        }),
        {
          status: 409,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Hash the password with bcrypt (12 rounds for better security)
    const hashedPassword = await hash(password, 12);

    // Create new user
    const userId = nanoid();
    const now = Date.now();

    // Generate random avatar number between 1-20
    const avatarNumber = Math.floor(Math.random() * 20) + 1;
    const avatarPath = `/avatars/bear${avatarNumber}.webp`;

    await db.insert(users).values({
      id: userId,
      email,
      name,
      password: hashedPassword,
      role: "user",
      createdAt: now,
      image: avatarPath,
    });

    // Return success response with proper headers
    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: userId,
          email,
          name,
          role: "user",
          image: avatarPath,
        },
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    );
  } catch (error) {
    console.error("Registration error:", error);

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
