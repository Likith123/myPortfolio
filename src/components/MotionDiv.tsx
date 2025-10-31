"use client";

import { motion, MotionProps } from "motion/react";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
};

function MotionDiv({ children, className, ...props }: MotionWrapperProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

export default MotionDiv;
