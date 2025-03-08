import type { Metadata } from "next";
import { Fredoka, Open_Sans } from "next/font/google";

import { siteMetadata } from "@/config/site";

import "./globals.css";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/sonner";

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${openSans.variable} font-sans antialiased`}
      >
        <SessionProvider session={session}>
          <Toaster richColors />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
