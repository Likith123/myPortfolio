"use client";
import { motion } from "motion/react";

const BackgroundAnimations = () => {
  const shapes = [
    { size: "w-[40vw] h-[40vw] max-w-[500px]", top: "-10%", left: "-10%", color: "bg-primary/8 dark:bg-primary/5" },
    { size: "w-[35vw] h-[35vw] max-w-[450px]", top: "50%", left: "70%", color: "bg-secondary/6 dark:bg-secondary/4" },
    { size: "w-[25vw] h-[25vw] max-w-[300px]", top: "20%", left: "40%", color: "bg-accent/6 dark:bg-accent/4" },
    { size: "w-[35vw] h-[35vw] max-w-[450px]", top: "70%", left: "-5%", color: "bg-primary/5 dark:bg-primary/4" },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, scale: 0.95 }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -50, 40, 0],
            scale: [0.95, 1.05, 0.9, 0.95],
          }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: shape.top, left: shape.left }}
          className={`absolute rounded-full blur-[100px] md:blur-[130px] -z-10 ${shape.color} ${shape.size}`}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimations;