interface SectionProps {
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly title: string;
}

export default function Section({ children, title, className }: SectionProps) {
  return (
    <section className={`text-gray-800 ${className ?? ""}`}>
      <h3 className="font-bold uppercase bg-gray-200 px-2">{title}</h3>
      <div className="px-2">{children}</div>
    </section>
  );
}
