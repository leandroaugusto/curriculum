export interface DialogContextType {
  open: boolean;
  toggle: () => void;
}

export interface DialogProviderProps {
  children: React.ReactNode;
}
