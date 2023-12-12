import {
  EmailShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  XIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
  TelegramIcon,
} from "react-share";
import DialogContent from "./Content";

interface DialogProps {
  readonly open: boolean;
  readonly shareTitle: string;
  readonly shareEmailBody: string;
}

export default function Dialog({
  open,
  shareTitle: title,
  shareEmailBody,
}: DialogProps) {
  const shareUrl = "https://curriculum-leandro-costa.vercel.app/en";

  return (
    <div
      className={`fixed top-0 w-full h-full flex items-center justify-center bg-opacity-60 bg-black ${
        open ? "block" : "hidden"
      }`}
    >
      <DialogContent>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="flex justify-center items-center"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <TelegramShareButton
          url={shareUrl}
          title={title}
          className="flex justify-center items-center"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="flex justify-center items-center"
        >
          <XIcon size={32} round />
        </TwitterShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={title}
          body={shareEmailBody}
          className="flex justify-center items-center"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>

        <LinkedinShareButton
          url={shareUrl}
          className="flex justify-center items-center"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </DialogContent>
    </div>
  );
}
