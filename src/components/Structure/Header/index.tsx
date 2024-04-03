import { useTranslations } from "next-intl";

import { AvatarName } from "@/components/Elements/AvatarName";
import Languages from "@/components/Elements/Languages";
import ProfilePhoto from "@/components/Elements/ProfilePhoto";

export default function Header(): React.ReactElement<HTMLElement> {
  const t = useTranslations<string>("Index");

  return (
    <header className="bg-gray-200">
      <div className="container mx-auto flex items-center justify-center py-16 px-4 relative">
        <ProfilePhoto />
        <AvatarName
          username="leandroaugusto"
          role={t("header.role")}
          actionsLabel={t("header.actions")}
        />
        <Languages />
      </div>
    </header>
  );
}
