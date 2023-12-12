import ScrollButton from "@/components/Buttons/ScrollButton";

interface HeaderProps {
  readonly username: string;
  readonly actionsLabel: string;
  readonly role: string;
}

export async function AvatarName({
  username,
  actionsLabel,
  role,
}: HeaderProps) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  return (
    <div className="text-gray-800 ml-6">
      <h1 className="text-2xl md:text-4xl md:mb-2">
        {user.name ?? "Leandro Augusto da Costa"}
      </h1>
      <h2 className="text-sm md:text-lg">{user.bio ?? role}</h2>
      <ScrollButton label={actionsLabel} />
    </div>
  );
}
