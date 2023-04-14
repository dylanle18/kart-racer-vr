import { Dialog } from "@mui/material";
import { useState } from "react";

interface ImageModalProps {
  height: number;
  index: number;
}

function ImageModal({ height, index }: ImageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <div key={index}>
      <img
        className="cursor-pointer"
        src={`https://picsum.photos/id/${10 + index}/${height}/300`}
        onClick={() => setOpen(true)}
      />
      <Dialog
        className="cursor-pointer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <img
          className="cursor-default"
          src={`https://picsum.photos/id/${10 + index}/${height}/300`}
        />
      </Dialog>
    </div>
  );
}

export default ImageModal;
