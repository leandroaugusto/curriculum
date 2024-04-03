export interface ArticleProps {
  readonly children: React.ReactNode;
  readonly company: string | React.ReactNode;
  readonly year: string | React.ReactNode;
  readonly role: string | React.ReactNode;
  readonly jobType: string | React.ReactNode;
}
