"use client";
import { motion } from "motion/react";

function Underline() {
  return (
    <motion.span
      layoutId="underline"
      className="absolute -bottom-[2px] h-[4px] w-full bg-blue-500 rounded-b-lg"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />
  );
}

export default Underline;
