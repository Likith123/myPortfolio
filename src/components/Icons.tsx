"use client";

import { motion } from "motion/react";

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
  const smoothNotchPath = `shape(
    from 0% 0%,
    line to 25% 0%,
    curve to 28% 2% with 27% 0%,
    curve to 35% 10% with 32% 8%,
    line to 65% 10%,
    curve to 72% 2% with 68% 8%,
    curve to 75% 0% with 73% 0%,
    line to 100% 0%,
    line to 100% 100%,
    line to 0% 100%,
    close
  )`;

  return (
    <div className="flex flex-col items-center relative pt-6 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <span className="bg-bgcolor px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/20 rounded-full shadow-sm whitespace-nowrap">
          {groupTitle}
        </span>
      </div>

      <ul
        style={{
          clipPath: smoothNotchPath,
        }}
        className={`bg-primary/5 border border-primary/15 w-80 min-h-[220px]
                   flex flex-wrap gap-3 justify-center items-center 
                   rounded-[3rem] p-6 pt-12 transition-all duration-300 
                   hover:bg-primary/8 shadow-sm`}
      >
        {IconsList.map(({ Icon, name }, index) => (
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
            <span
              className="group text-[13px] font-semibold border border-foreground/15 px-3 py-1.5 rounded-xl 
                         flex items-center bg-bgcolor/60 backdrop-blur-md 
                         hover:border-primary/40 hover:text-primary transition-all duration-300 
                         space-x-2 shadow-sm cursor-default"
            >
              <span className="tracking-tight text-foreground/80 group-hover:text-primary transition-colors">
                {name}
              </span>
              <span
                className="text-lg opacity-70 group-hover:opacity-100 transition-opacity"
              >
                {Icon}
              </span>
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Icons;
