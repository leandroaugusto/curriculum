interface ArticleProps {
  readonly children: React.ReactNode;
  readonly company: string;
  readonly year: string;
  readonly role: string;
}

export default function Article({
  children,
  company,
  year,
  role,
}: ArticleProps) {
  return (
    <article className="my-2">
      <h4 className="font-bold">{year}</h4>
      <h4 className="font-bold">{role}</h4>
      <h5 className="my-2 text-sm font-black text-cyan-600">{company}</h5>
      {children}
    </article>
  );
}
