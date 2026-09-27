"use client";
import { MotionSpan } from "@/components/MotionTags";
import { AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

function RotatingText({
  modes = ["Remote", "Hybrid", "Relocation"],
}: {
  modes?: string[];
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextMode = useCallback(() => {
    setIndex((prev) => (prev + 1) % modes.length);
  }, [modes.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextMode, 3500);
    return () => clearInterval(timer);
  }, [isPaused, nextMode]);

  return (
    <button
      type="button"
      onClick={nextMode}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="group relative inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 hover:bg-primary/15 dark:bg-primary/15 dark:hover:bg-primary/20 border border-primary/25 hover:border-primary/50 text-primary rounded-full font-bold text-sm md:text-base cursor-pointer transition-all duration-200 active:scale-95 shadow-xs"
    >
      <span className="relative inline-flex overflow-hidden h-6 min-w-[70px] md:min-w-[85px] items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <MotionSpan
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="whitespace-nowrap font-bold"
          >
            {modes[index]}
          </MotionSpan>
        </AnimatePresence>
      </span>
    </button>
  );
}

export default RotatingText;
