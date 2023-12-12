"use client";

import { useReactToPrint } from "react-to-print";
import { useRef, useContext } from "react";

import { DialogContext } from "@/contexts/DialogContext";

import Button from "@/components/Buttons/DefaultButton";
import Dialog from "@/components/Elements/Dialog";

interface AppProps {
  readonly children: React.ReactNode;
  readonly printLabel: string;
  readonly shareLabel: string;
  readonly shareTitle: string;
  readonly shareEmailBody: string;
}

export default function App({
  children,
  printLabel,
  shareLabel,
  shareTitle,
  shareEmailBody,
}: AppProps) {
  const { open, toggle } = useContext(DialogContext);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="app" ref={componentRef}>
        {children}
      </div>
      <Button
        id="print"
        label={printLabel}
        handleClick={handlePrint}
        className="btn-slate"
      />
      <Button
        id="share"
        label={shareLabel}
        handleClick={toggle}
        className="btn-slate-dark"
      />
      <Dialog
        open={open}
        shareTitle={shareTitle}
        shareEmailBody={shareEmailBody}
      />
    </>
  );
}
