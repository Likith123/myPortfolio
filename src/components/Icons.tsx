"use client";

import { motion } from "motion/react";
import Link from "next/link";
type IconListType = {
  // Icon: any;
  name: string;
  Icon: React.ReactElement;
  color?: string;
}[];

const iconsVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function Icons({ IconsList }: { IconsList: IconListType }) {
  return (
    <ul className="bg-primary/20 w-56 aspect-auto flex flex-wrap gap-4 justify-center items-center rounded-2xl p-4">
      {IconsList.map(({ color, Icon, name }, index) => (
        <motion.li
          key={name}
          variants={iconsVariants}
          whileInView="animate"
          initial="initial"
          transition={{ delay: 0.05 * index }}
          viewport={{
            once: true,
          }}
        >
          {/* <Icon className={`size-8 ${color}`} xlinkTitle={name} /> */}
          <Link
            className="text-sm border px-2 py-1 border-foreground/60 rounded-md flex items-center hover:scale-105 transition-transform duration-200 space-x-2"
            href=""
          >
            <span>{name}</span>
            <span>{Icon}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default Icons;
