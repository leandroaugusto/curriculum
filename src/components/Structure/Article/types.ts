export interface ArticleProps {
  readonly children: React.ReactNode;
  readonly company:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray;
  readonly year:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray;
  readonly role:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray;
  readonly jobType:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray;
}
