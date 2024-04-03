import { SectionProps } from "./types";

export default function Section({ children, title, className }: SectionProps) {
  return (
    <section className={`text-gray-800 ${className || ""}`}>
      {title && (
        <h3 className="font-bold uppercase bg-gray-200 px-4">{title}</h3>
      )}
      <div className="px-4">{children}</div>
    </section>
  );
}
