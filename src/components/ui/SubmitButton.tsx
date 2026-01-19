"use client";
import { useFormStatus } from "react-dom";
import { IoSend } from "react-icons/io5";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group w-full py-4 bg-primary text-bgcolor font-black tracking-widest text-sm uppercase rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed md:hover:-translate-y-0.5 md:hover:bg-primary/90 active:scale-[0.98] transition-all duration-300"
    >
      <span className={pending ? "animate-pulse" : ""}>
        {pending ? "Sending..." : "Submit"}
      </span>
      <IoSend
          className={`w-4 h-4 transition-all ease-in duration-700 
            ${pending 
              ? "translate-x-20 -translate-y-20 scale-150 rotate-12 opacity-0" 
              : "-rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 group-active:scale-90"
            }`}
        />
    </button>
  );
}

export default SubmitButton;
