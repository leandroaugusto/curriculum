"use client";

import { createContext, useState } from "react";

import { DialogContextType, DialogProviderProps } from "./types";

export const DialogContext = createContext<DialogContextType>(
  {} as DialogContextType
);

export function DialogProvider({
  children,
}: DialogProviderProps): React.ReactElement<DialogProviderProps> {
  const [open, setOpen] = useState<boolean>(false);

  function toggle() {
    setOpen((state) => !state);
  }

  return (
    <DialogContext.Provider value={{ open, toggle }}>
      {children}
    </DialogContext.Provider>
  );
}
