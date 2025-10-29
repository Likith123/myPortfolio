"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
export default function Home({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  return (
    <motion.section
      className="flex w-full h-[100vh] items-center justify-center"
      ref={ref}
    >
      <motion.div
        className="flex flex-col flex-1 justify-center w-1/2 p-8 space-y-8"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl gap-4 flex flex-col ">
          <h1>Hi there, I&apos;m</h1>
          <p className="text-6xl bg-gradient-to-br from-blue-500 via-purple-300 bg-blend-overlay to-green-500 font-bold text-transparent bg-clip-text">
            Limkith Adusumalli
          </p>
        </span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          illum corrupti optio omnis voluptas repellat, reiciendis facere odit
          aut laudantium id eaque ipsam nam accusantium est. Delectus,
          doloremque quos?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          illum corrupti optio omnis voluptas repellat
        </p>
        <div className="flex space-x-8 text-lg">
          <Link
            href=""
            className="px-4 py-2 border-2 border-blue-500 rounded-full bg-blue-500 text-white"
          >
            Hire Me
          </Link>
          <Link
            href=""
            className="px-4 py-2 border-2 border-gray-300 rounded-full"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-1 items-center justify-center w-1/2 h-[100vh]"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* 3 / 4 cards */}
        <div className="relative flex justify-center">
          <Image
            src="/undraw_coding_joxb.svg"
            alt="SVG"
            height={400}
            width={400}
          ></Image>
        </div>
      </motion.div>
    </motion.section>
  );
}
