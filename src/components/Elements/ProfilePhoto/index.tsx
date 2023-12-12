import Photo from "@/assets/images/photo.jpeg";
import Photo2 from "@/assets/images/facebook.jpeg";
import Image from "next/image";

interface ProfilePhotoProps {
  url?: string;
}

export default function ProfilePhoto({ url }: ProfilePhotoProps) {
  return (
    <Image
      src={url ?? Photo2}
      alt="Profile photo"
      className="object-cover object-center h-32 w-32 md:h-40 md:w-40 rounded-full"
    />
  );
}
