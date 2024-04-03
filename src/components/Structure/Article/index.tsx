import { ArticleProps } from "./types";

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
      <h4 className="mt-2 font-bold text-cyan-800">{role}</h4>
      <h5 className="mb-2 text-sm font-bold text-cyan-800">{company}</h5>
      {children}
    </article>
  );
}
