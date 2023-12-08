import { useTranslations } from "next-intl";
import Image from "next/image";

import ProfilePhoto from "@/components/ProfilePhoto";
import Header from "@/components/Header";
import Section from "@/components/Section";
import AvatarName from "@/components/AvatarName";
import Languages from "@/components/Languages";

import PhoneIcon from "@/assets/icons/phone.svg";
import LetterIcon from "@/assets/icons/letter.svg";
import DocumentIcon from "@/assets/icons/document.svg";
import CodeIcon from "@/assets/icons/code.svg";
import Article from "@/components/Article";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <Header>
        <ProfilePhoto />
        <AvatarName role={t("header.role")} />
        <Languages />
      </Header>

      <main className="container mx-auto flex-1 py-10 grid grid-flow-col auto-cols-fr gap-x-32 gap-y-8">
        <Section title={t("about.title")}>
          <p className="my-2">{t("about.description")}</p>
          <p className="font-bold">{t("about.locale")}</p>
          <ul className="mt-4 grid gap-2 font-bold">
            <li className="flex">
              <Image src={PhoneIcon} alt="Phone" className="mr-2" />
              <a
                href="https://wa.me/5511965664487"
                target="_blank"
                className="text-green-700"
              >
                {t("about.phone")}
              </a>
            </li>
            <li className="flex">
              <Image src={LetterIcon} alt="Email" className="mr-2" />
              <a
                href="mailto:leandroacosta2008@gmail.com"
                target="_blank"
                className="text-red-700"
              >
                leandroacosta2008@gmail.com
              </a>
            </li>
            <li className="flex">
              <Image src={DocumentIcon} alt="Linkedin" className="mr-2" />
              <a
                href={t("about.linkedin")}
                target="_blank"
                className="text-sky-700"
              >
                linkedin.com/in/leandroaugustocosta
              </a>
            </li>
            <li className="flex">
              <Image src={CodeIcon} alt="Github" className="mr-2" />
              <a href="https://github.com/leandroaugusto" target="_blank">
                github.com/leandroaugusto
              </a>
            </li>
          </ul>
        </Section>

        <Section title={t("academic.title")}>
          <h4 className="font-bold my-2">2012</h4>
          <p>{t("academic.description")}</p>
        </Section>

        <Section title={t("skills.title")}>
          <ul className="list-disc pl-5 my-2">
            <li>React JS</li>
            <li>Typescript</li>
            <li>React Native</li>
            <li>Next JS</li>
            <li>Styled Components</li>
            <li>Tailwind</li>
            <li>Wordpress</li>
            <li>Redux</li>
            <li>GraphQL</li>
            <li>Node JS</li>
            <li>MongoDB</li>
            <li>GIT</li>
            <li>Unit Tests</li>
            <li>E2E Tests</li>
          </ul>
        </Section>

        <Section title={t("experience.title")} className="row-span-3">
          <Article
            company={t("experience.dasa.name")}
            role={t("experience.dasa.role")}
            year="2022-2023"
          >
            <p>{t("experience.dasa.description")}</p>
          </Article>
        </Section>
      </main>
    </>
  );
}
