import Photo from "@/assets/images/photo.jpeg";
import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <Image
      src={Photo}
      alt="Profile photo"
      className="object-cover object-center h-40 w-40 rounded-full"
    />
  );
}
