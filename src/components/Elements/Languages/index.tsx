"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import EnFlag from "@/assets/icons/gb-eng.svg";
import BrFlag from "@/assets/icons/br.svg";

export default function Languages(): React.ReactElement<HTMLDivElement> {
  const pathname = usePathname();

  return (
    <nav className="absolute top-4 right-4 md:right-0 print:hidden">
      <ul className="grid gap-3 grid-flow-col text-gray-800">
        <li
          className={`rounded-full overflow-hidden border-2 border-solid ${
            pathname === "/en" ? "border-red-700" : "border-gray-300 scale-90"
          }`}
        >
          <Link href={"/en"}>
            <Image
              alt="English"
              src={EnFlag}
              className="object-cover object-center h-6 w-8 rounded"
            />
          </Link>
        </li>
        <li
          className={`rounded-full overflow-hidden border-2 border-solid ${
            pathname === "/pt" ? "border-blue-800" : "border-gray-300 scale-90"
          }`}
        >
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
