import DialogCloseIcon from "../CloseButton";

interface DialogContentProps {
  readonly children: React.ReactNode;
}

export default function DialogContent({ children }: DialogContentProps) {
  return (
    <div className="rounded-xl bg-white w-1/2 h-1/5 grid grid-cols-3 md:grid-cols-5 md:py-16 relative">
      <DialogCloseIcon />
      {children}
    </div>
  );
}
