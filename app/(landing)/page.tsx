"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-background flex min-h-svh flex-col items-center justify-center px-4">
      <div className="max-w-3xl space-y-6 text-center">
        <motion.h1
          className="text-primary text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Master Your Finances with Fun
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Learn smart money habits through interactive challenges, AI-powered
          coaching, and earn exciting rewards along the way.
        </motion.p>

        <motion.div
          className="pt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary transition-colors"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
