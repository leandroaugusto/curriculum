"use client";

import { ScrollButtonProps } from "./types";

export default function ScrollButton({
  label,
}: ScrollButtonProps): React.ReactElement<HTMLButtonElement> {
  const scrollToBottom: () => void = () => {
    const element = document.getElementById("print");
    const elementTop = element?.offsetTop;
    window.scrollTo({ top: elementTop, behavior: "smooth" });
  };

  return (
    <button data-testid="scroll-to-bottom-button" className="rounded-md bg-slate-500 text-slate-100 px-3 py-1 uppercase text-xs md:text-sm font-bold mt-4 print:hidden" onClick={scrollToBottom}
    >
          {label}
    </button>
  );
}
