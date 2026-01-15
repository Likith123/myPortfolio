"use client";

import { motion } from "motion/react";
import Link from "next/link";

type IconListType = {
  name: string;
  Icon: React.ReactElement;
  color?: string;
  groupTitle?: string;
}[];

const iconsVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
};

function Icons({
  IconsList,
  groupTitle,
}: {
  IconsList: IconListType;
  groupTitle: string;
}) {
  const smoothNotchPath = `M 0,0 L 0.25,0 Q 0.27,0 0.28,0.02 L 0.32,0.08 Q 0.335,0.1 0.35,0.1 L 0.65,0.1 Q 0.665,0.1 0.68,0.08 L 0.72,0.02 Q 0.73,0 0.75,0 L 1,0 L 1,1 L 0,1 Z`;

  return (
    <div className="flex flex-col items-center relative pt-6">
      <motion.svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="slumpClip" clipPathUnits="objectBoundingBox">
            <motion.path d={smoothNotchPath} initial={false} />
          </clipPath>
        </defs>
      </motion.svg>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <span className="bg-bgcolor px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/20 rounded-full shadow-sm whitespace-nowrap">
          {groupTitle}
        </span>
      </div>

      <ul
        style={{ clipPath: "url(#slumpClip)" }}
        className="bg-primary/5 border border-primary/15 w-80 min-h-[220px] 
                   flex flex-wrap gap-3 justify-center items-center 
                   rounded-[3rem] p-6 pt-12 transition-all duration-300 
                   hover:bg-primary/[0.08] shadow-sm"
      >
        {IconsList.map(({ color, Icon, name }, index) => (
          <motion.li
            key={name}
            variants={iconsVariants}
            whileInView="animate"
            initial="initial"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{
              delay: 0.05 * index,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            viewport={{ once: true }}
            className="list-none"
          >
            <Link
              className="group text-[13px] font-semibold border border-foreground/15 px-3 py-1.5 rounded-xl 
                         flex items-center bg-bgcolor/60 backdrop-blur-md 
                         hover:border-primary/40 hover:text-primary transition-all duration-300 
                         space-x-2 shadow-sm"
              href="#"
            >
              <span className="tracking-tight text-foreground/80 group-hover:text-primary transition-colors">
                {name}
              </span>
              <span
                className={`text-lg opacity-70 group-hover:opacity-100 transition-opacity ${color}`}
              >
                {Icon}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Icons;
