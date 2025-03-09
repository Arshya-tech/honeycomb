"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
};
const template = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};
export default template;
