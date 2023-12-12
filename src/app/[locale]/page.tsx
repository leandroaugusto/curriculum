import { useTranslations } from "next-intl";

import App from "@/components/App";
import Header from "@/components/Structure/Header";
import Main from "@/components/Structure/Main";
import { DialogProvider } from "@/contexts/DialogContext";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <DialogProvider>
      <App
        printLabel={t("footer.print")}
        shareLabel={t("footer.share")}
        shareTitle={t("share.title")}
        shareEmailBody={t("share.email")}
      >
        <Header />
        <Main />
      </App>
    </DialogProvider>
  );
}
