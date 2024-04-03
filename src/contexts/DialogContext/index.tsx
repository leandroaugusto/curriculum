"use client";

import { createContext, useState, useMemo, useCallback } from "react";

import { DialogContextType, DialogProviderProps } from "./types";

export const DialogContext = createContext<DialogContextType>(
  {} as DialogContextType
);

export function DialogProvider({
  children,
}: DialogProviderProps): React.ReactElement<DialogProviderProps> {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setOpen((state) => !state);
  }, [setOpen]);

  const value = useMemo(() => ({ open, toggle }), [open, toggle]);

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}
