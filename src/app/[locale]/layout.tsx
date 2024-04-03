import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { LOCALES, locales } from "@/utils/locales";
import "@/assets/styles/globals.css";

import { RootLayoutProps } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leandro Costa | Curriculum",
  description: "Curriculum by Leandro Costa Dev",
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps): React.ReactElement<HTMLHtmlElement> {
  if (!locales.includes(locale as LOCALES)) notFound();

  return (
    <html lang={locale} className="h-full">
      <body className={`${inter.className} bg-white min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
