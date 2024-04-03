export interface DialogContextType {
  open: boolean;
  toggle: () => void;
}

export interface DialogProviderProps {
  readonly children: React.ReactNode;
}
