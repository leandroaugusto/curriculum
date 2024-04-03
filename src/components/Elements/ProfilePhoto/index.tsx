import Photo2 from "@/assets/images/facebook.jpeg";
import Image from "next/image";

import { ProfilePhotoProps } from "./types";

export default function ProfilePhoto({
  url,
}: ProfilePhotoProps): React.ReactElement {
  return (
    <Image
      src={url || Photo2}
      alt="Profile photo"
      className="object-cover object-center h-32 w-32 md:h-40 md:w-40 rounded-full"
    />
  );
}
