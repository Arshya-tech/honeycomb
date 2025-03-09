"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function AnimatedHoney() {
  return (
    <>
      <motion.div
        initial={{ rotate: -25, y: 0 }}
        animate={{
          rotate: [-25, -12, -25],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-8 left-0 md:-top-12 md:-left-20 2xl:-left-24"
      >
        <Image
          src="/assets/honey.webp"
          alt="Honey"
          width={80}
          height={80}
          className="size-16 select-none md:size-20"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 25, y: 0 }}
        animate={{
          rotate: [25, 12, 25],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -right-20 -bottom-12 max-md:hidden"
      >
        <Image
          src="/assets/honey.webp"
          alt="Honey"
          width={80}
          height={80}
          className="size-20 select-none"
        />
      </motion.div>
    </>
  );
}
