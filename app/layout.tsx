import type { Metadata } from "next";
import { Open_Sans, Righteous } from "next/font/google";

import { siteMetadata } from "@/config/site";

import "./globals.css";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/sonner";

const righteous = Righteous({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
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
        className={`${righteous.variable} ${openSans.variable} font-sans antialiased`}
      >
        <SessionProvider session={session}>
          <Toaster richColors position="bottom-center" />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
