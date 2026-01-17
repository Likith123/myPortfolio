"use client";
import { useFormStatus } from "react-dom";
import { IoSend } from "react-icons/io5";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group w-full py-4 bg-primary/85 text-bgcolor font-black tracking-widest text-sm uppercase rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 mt-4 hover:-translate-y-0.5 active:scale-[0.98] hover:bg-primary/80 transition-all"
    >
      <span className={pending ? "animate-pulse" : ""}>
        {pending ? "Sending..." : "Submit"}
      </span>
      <IoSend
        className={`w-4 h-4 -rotate-12 transition-all ease-in-out duration-1200 
          ${pending ? "translate-x-12 -translate-y-12 opacity-0" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`}
      />
    </button>
  );
}

export default SubmitButton;
