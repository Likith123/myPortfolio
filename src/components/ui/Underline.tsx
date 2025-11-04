"use client";
import { motion } from "motion/react";

function Underline() {
  return (
    <motion.span
      layoutId="underline"
      className="absolute -bottom-0.5 h-1 w-full bg-primary/90 rounded-b-lg"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />
  );
}

export default Underline;
