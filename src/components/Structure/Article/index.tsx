interface ArticleProps {
  readonly children: React.ReactNode;
  readonly company: string;
  readonly year: string;
  readonly role: string;
  readonly jobType: string;
}

export default function Article({
  children,
  company,
  year,
  role,
  jobType,
}: ArticleProps) {
  return (
    <article className="mt-4 mb-6">
      <h4 className="text-sm font-bold">
        {year} <span>| {jobType}</span>
      </h4>
      <h4 className="mt-2 font-black">{role}</h4>
      <h5 className="mb-2 font-black text-cyan-600">{company}</h5>
      {children}
    </article>
  );
}
