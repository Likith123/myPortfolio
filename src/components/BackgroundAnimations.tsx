"use client";
import { motion } from "framer-motion";

const BackgroundAnimations = () => {
  const shapes = [
    { type: "circle", size: "size-80", top: "10%", left: "5%" },
    { type: "square", size: "size-60", top: "60%", left: "80%" },
    { type: "triangle", size: "w-0 h-0 border-l-[50px] border-r-[50px] border-b-[80px]", top: "30%", left: "40%" },
    { type: "circle", size: "size-32", top: "80%", left: "20%" },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: shape.top, left: shape.left }}
          className={`absolute border border-foreground/20 blur-2xl bg-primary/24 -z-10${
            shape.type === "circle" ? "rounded-full" : ""
          } ${shape.type === "triangle" ? "border-none border-b-foreground/10" : ""} ${shape.size}`}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimations;