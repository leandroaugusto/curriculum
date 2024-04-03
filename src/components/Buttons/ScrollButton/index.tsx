"use client";

import { ScrollButtonProps } from "./types";

export default function ScrollButton({
  label,
}: ScrollButtonProps): React.ReactElement<HTMLButtonElement> {
  const scrollToBottom: () => void = () => {
    document.getElementById("print")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className="rounded-md bg-slate-500 text-slate-100 px-3 py-1 uppercase text-xs md:text-sm font-bold mt-4 print:hidden"
      onClick={scrollToBottom}
    >
      {label}
    </button>
  );
}
