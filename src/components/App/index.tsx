"use client";

import { useReactToPrint } from "react-to-print";
import { useRef, useContext, Suspense } from "react";

import { AppProps } from "./types";

import { DialogContext } from "@/contexts/DialogContext";

import Button from "@/components/Buttons/DefaultButton";
import Loading from "@/components/Elements/Loading";
import Dialog from "@/components/Elements/Dialog";

export default function App({
  children,
  printLabel,
  shareLabel,
  shareTitle,
  shareEmailBody,
}: AppProps): React.ReactNode {
  const { open, toggle } = useContext(DialogContext);
  const componentRef = useRef<null | HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Suspense fallback={<Loading />}>
      <div data-testid="app-container" className="app" ref={componentRef}>
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
