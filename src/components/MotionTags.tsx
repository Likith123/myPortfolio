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

function MotionSpan({ children, className, ...props }: MotionWrapperProps) {
  return (
    <motion.span className={className} {...props}>
      {children}
    </motion.span>
  );
}

export { MotionDiv, MotionSpan };
