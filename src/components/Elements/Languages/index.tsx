import Link from "next/link";
import Image from "next/image";

import EnFlag from "@/assets/icons/gb-eng.svg";
import BrFlag from "@/assets/icons/br.svg";

export default function Languages(): React.ReactElement<HTMLDivElement> {
  return (
    <nav className="absolute top-4 right-4 md:right-0 print:hidden">
      <ul className="flex text-gray-800">
        <li className="flex items-center justify-center">
          <Link href={"/en"}>
            <Image
              src={EnFlag}
              alt="English"
              className="object-cover object-center h-6 w-8 rounded"
            />
          </Link>
        </li>
        <li className="flex items-center justify-center ml-4">
          <Link href={"/pt"}>
            <Image
              src={BrFlag}
              alt="Português"
              className="object-cover object-center h-6 w-8 rounded"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
