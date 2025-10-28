"use client";

import { motion } from "motion/react";
import Link from "next/link";
type IconListType = {
  // Icon: any;
  name: string;
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
    <ul className="w-56 flex flex-wrap gap-4 justify-center items-center">
      {IconsList.map(({ name, color }, index) => (
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
            className="text-sm border-1 px-2 py-1 border-gray-400 rounded-md"
            href=""
          >
            {name}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default Icons;
