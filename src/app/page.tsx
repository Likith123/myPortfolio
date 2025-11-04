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
      className="flex w-full h-screen items-center justify-center scroll-mt-16"
      ref={ref}
      id="home"
    >
      <MotionDiv
        className="flex flex-col flex-1 justify-center w-1/2 px-16 py-8 space-y-8"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary/80 text-4xl gap-4 flex flex-col ">
          <h1>Hi there, I&apos;m</h1>
          <p className="text-primary/90 text-6xl font-bold">
            Likith Adusumalli
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
            className="px-4 py-2 border-2 rounded-full bg-primary text-bgcolor font-semibold"
          >
            Contact Me
          </Link>
          <Link
            href=""
            className="px-4 py-2 border-2 border-primary rounded-full font-semibold"
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
