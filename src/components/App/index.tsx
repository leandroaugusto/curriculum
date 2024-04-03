"use client";

import { useReactToPrint } from "react-to-print";
import { useRef, useContext, Suspense } from "react";

import { AppProps } from "./types";

import { DialogContext } from "@/contexts/DialogContext";
import { DialogContextType } from "@/contexts/DialogContext/types";

import Button from "@/components/Buttons/DefaultButton";
import Dialog from "@/components/Elements/Dialog";
import Loading from "@/components/Elements/Loading";

export default function App({
  children,
  printLabel,
  shareLabel,
  shareTitle,
  shareEmailBody,
}: AppProps): React.ReactNode {
  const { open, toggle } = useContext(DialogContext) as DialogContextType;
  const componentRef = useRef<null | HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className="app" ref={componentRef}>
        {children}
      </div>
      <Button
        id="print"
        label={printLabel}
        handleClick={handlePrint}
        className="btn-slate print:hidden"
      />
      <Button
        id="share"
        label={shareLabel}
        handleClick={toggle}
        className="btn-slate-dark print:hidden"
      />
      <Dialog
        open={open}
        shareTitle={shareTitle}
        shareEmailBody={shareEmailBody}
      />
    </Suspense>
  );
}
