import "./styles.css";

interface KnowledgeProps {
  readonly name: string;
  readonly value: number;
}

const KNOWLEDGE_SIZE = 10;

export default function Knowledge({ name, value }: KnowledgeProps) {
  return (
    <div className="mb-5">
      <h4 className="font-bold my-2">{name}</h4>
      <ul className="knowledge-list">
        {[...Array(KNOWLEDGE_SIZE)].map((_, index) => (
          <li
            key={index}
            className={`${
              index < value ? "filled bg-slate-600" : "empty bg-slate-300"
            }`}
          />
        ))}
      </ul>
    </div>
  );
}
