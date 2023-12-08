interface HeaderProps {
  readonly role: string;
}

export default function AvatarName({ role }: HeaderProps) {
  return (
    <div className="text-gray-800 ml-6">
      <h1 className="text-3xl mb-2">Leandro Augusto da Costa</h1>
      <h2>{role}</h2>
    </div>
  );
}
