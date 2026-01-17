"use client";
import { MotionSpan } from "@/components/MotionTags";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

function RotatingText({ modes }: { modes: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % modes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="text-primary relative inline-flex flex-col overflow-hidden h-auto w-20 text-center px-2 bg-primary/5 border border-primary/15 rounded-md blur-backdrop-filter backdrop-filter backdrop-blur-lg">
      <AnimatePresence mode="wait">
        <MotionSpan
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="whitespace-nowrap font-bold"
        >
          {modes[index]}
        </MotionSpan>
      </AnimatePresence>
    </span>
  );
}

export default RotatingText;
