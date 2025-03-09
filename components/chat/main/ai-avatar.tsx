"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type AvatarMood = "neutral" | "happy" | "concerned" | "celebrating";

interface AIAvatarProps {
  mood?: AvatarMood;
  animate?: boolean;
}

export const AIAvatar = ({
  mood = "neutral",
  animate = true,
}: AIAvatarProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation when mood changes
  useEffect(() => {
    if (animate) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [mood, animate]);

  const getAvatarSrc = () => {
    switch (mood) {
      case "happy":
        return "/avatars/bear1.webp";
      case "concerned":
        return "/avatars/bear5.webp";
      case "celebrating":
        return "/avatars/bear3.webp";
      case "neutral":
      default:
        return "/avatars/bear19.webp";
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: isAnimating ? [1, 1.1, 1] : 1,
        opacity: 1,
        y: isAnimating && mood === "celebrating" ? [0, -10, 0] : 0,
        rotate: isAnimating && mood === "happy" ? [0, 5, -5, 0] : 0,
      }}
      transition={{
        duration: isAnimating ? 0.5 : 0.3,
        times: isAnimating ? [0, 0.5, 1] : undefined,
      }}
      className="relative flex size-16 items-center justify-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="border-primary/30 bg-primary/10 overflow-hidden rounded-full border-3 shadow-md">
        <Image
          src={getAvatarSrc()}
          alt="AI Assistant"
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>

      {mood === "celebrating" && isAnimating && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-primary-foreground border-primary-foreground/20 absolute -top-2 -right-1 flex size-8 items-center justify-center rounded-full border-2 text-base shadow-md"
        >
          🎉
        </motion.div>
      )}
    </motion.div>
  );
};
