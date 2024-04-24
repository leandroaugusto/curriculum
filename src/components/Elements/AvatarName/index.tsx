import ScrollButton from "@/components/Buttons/ScrollButton";

import { AvatarNameProps } from "./types";

export async function AvatarName({
  actionsLabel,
  role,
}: AvatarNameProps): Promise<React.ReactElement<HTMLDivElement>> {
  const response = await fetch("https://api.github.com/users/leandroaugusto");
  const user = await response.json();

  return (
    <div className="text-gray-800 ml-6" data-testid="avatar-name">
      <h1 className="text-2xl md:text-4xl md:mb-2" data-testid="username">
        {user.name || "Leandro Augusto da Costa"}
      </h1>
      <h2 className="text-sm md:text-lg" data-testid="bio">
        {user.bio || role}
      </h2>
      <ScrollButton label={actionsLabel} />
    </div>
  );
}
