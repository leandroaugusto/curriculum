interface KnowledgeProps {
  readonly name: string;
  readonly value: number;
}

const KNOWLEDGE_SIZE = 10;

export default function Knowledge({ name, value }: KnowledgeProps) {
  return (
    <div className="mb-5">
      <h4 className="font-bold my-2">{name}</h4>
      <ul className={`grid gap-x-2 grid-cols-${KNOWLEDGE_SIZE} grid-flow-col`}>
        {[...Array(KNOWLEDGE_SIZE)].map((_, index) => (
          <li
            key={index}
            className={`${
              index < value ? "bg-slate-600" : "bg-slate-300"
            } h-3.5`}
          />
        ))}
      </ul>
    </div>
  );
}
