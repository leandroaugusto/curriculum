import DialogCloseIcon from "../CloseButton";

import { DialogContentProps } from "./types";

export default function DialogContent({
  children,
}: DialogContentProps): React.ReactElement<HTMLDivElement> {
  return (
    <div className="rounded-xl bg-white w-1/2 h-1/5 grid grid-cols-3 md:grid-cols-5 pt-10 md:py-16 relative">
      <DialogCloseIcon />
      {children}
    </div>
  );
}
