"use client";

interface ScrollButtonProps {
  readonly label: string;
}

export default function ScrollButton({ label }: ScrollButtonProps) {
  const scrollToBottom = () => {
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
