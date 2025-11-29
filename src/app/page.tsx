import MotionDiv from "@/components/MotionDiv";
import Image from "next/image";
import Link from "next/link";
export default function Home({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section
      className="flex w-full h-screen items-center justify-center scroll-mt-16 bg-gradient-to-b from-bgcolor via-accent/10 to-primary/40"
      ref={ref}
      id="home"
    >
      <MotionDiv
        className="flex flex-col flex-1 justify-center w-1/2 px-16 py-8 space-y-8"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl gap-4 flex flex-col ">
          <h1>Hi there, I&apos;m a</h1>
          {/* TODO: Add text gradient from left top to bottom to below text only*/}
          <p className="text-primary text-5xl font-bold">
            Full-Stack Developer
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
            href="/contactMe"
            className="px-4 py-2 rounded-full text-bgcolor font-semibold hover:bg-accent bg-gradient-to-b from-primary/50 to-primary/80"
          >
            Contact Me
          </Link>
          <Link
            href=""
            className="px-4 py-2 border-2 rounded-4xl font-semibold hover:text-primary"
          >
            Resume
          </Link>
        </div>
      </MotionDiv>
      <MotionDiv
        className="flex flex-1 items-center justify-center w-1/2 h-screen"
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
      </MotionDiv>
    </section>
  );
}
