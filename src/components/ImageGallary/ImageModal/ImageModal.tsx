import { Dialog } from "@mui/material";
import { useState } from "react";

interface ImageModalProps {
  src: string;
}

function ImageModal({ src }: ImageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img
        className="cursor-pointer"
        src={src}
        onClick={() => setOpen(true)}
      />
      <Dialog
        className="cursor-pointer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <img
          className="cursor-default"
          src={src}
        />
      </Dialog>
    </div>
  );
}

export default ImageModal;
