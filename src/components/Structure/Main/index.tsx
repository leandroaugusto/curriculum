import { useTranslations } from "next-intl";
import Image from "next/image";

import Article from "@/components/Structure/Article";
import Knowledge from "@/components/Elements/Knowledge";
import Section from "@/components/Structure/Section";

import PhoneIcon from "@/assets/icons/phone.svg";
import LetterIcon from "@/assets/icons/letter.svg";
import DocumentIcon from "@/assets/icons/document.svg";
import CodeIcon from "@/assets/icons/code.svg";

import { aboutKeys, skillKeys, experienceKeys } from "./constants";
import KnowledgeData from "./knowledge.json";
import { IconsType } from "./types";

export default function Main(): React.ReactElement<HTMLElement> {
  const t = useTranslations<string>("Index");
  const about = (key: string) => t(`about.list.${key}`);
  const skill = (key: string) => t(`skills.list.${key}`);
  const xp = (key: string) =>
    t.rich(`experience.list.${key}`, {
      b: (chunks) => <b className="text-cyan-600">{chunks}</b>,
    });

  const icons: IconsType = {
    PhoneIcon: PhoneIcon,
    LetterIcon: LetterIcon,
    DocumentIcon: DocumentIcon,
    CodeIcon: CodeIcon,
  };

  return (
    <main className="container mx-auto flex-1 py-10 grid md:grid-flow-col auto-cols-fr md:gap-x-8 lg:gap-x-16 xl:gap-x-32 gap-y-8 print:grid-flow-col print:gap-x-8 print:text-xs">
      <Section title={t("about.title")}>
        <p className="my-2">
          {t.rich("about.description", {
            b: (chunks) => <b className="text-cyan-600">{chunks}</b>,
          })}
        </p>
        <p className="font-bold">{t("about.locale")}</p>
        <ul className="mt-4 grid gap-2 font-bold">
          {aboutKeys.map((key) => (
            <li key={key} className="flex text-sm print:text-xs">
              <Image
                src={icons[about(`${key}.icon`) as keyof IconsType]}
                alt={String(about(`${key}.text`)).toUpperCase()}
                className="mr-2"
              />
              <a
                href={about(`${key}.link`)}
                target="_blank"
                className="text-cyan-800"
              >
                {about(`${key}.text`)}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={t("academic.title")}>
        <h4 className="font-bold my-2">2012</h4>
        <p>{t("academic.description")}</p>
      </Section>

      <Section title={t("skills.title")}>
        <ul className="list-disc pl-5 my-2">
          {skillKeys.map((key) => (
            <li key={key} className="font-semibold">
              {skill(`${key}.name`)}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title={t("knowledge.title")}
        className="order-2 md:order-1 print:-order-none"
      >
        {KnowledgeData.map((k) => (
          <Knowledge key={k.name} name={k.name} value={k.value} />
        ))}
      </Section>

      <Section
        title={t("experience.title")}
        className="order-1 md:order-2 md:row-span-5 print:row-span-5 print:-order-none"
      >
        {experienceKeys.map((key) => (
          <Article
            key={key}
            company={xp(`${key}.name`)}
            role={xp(`${key}.role`)}
            year={xp(`${key}.year`)}
            jobType={xp(`${key}.jobType`)}
          >
            <p>{xp(`${key}.description`)}</p>
          </Article>
        ))}
      </Section>
    </main>
  );
}
