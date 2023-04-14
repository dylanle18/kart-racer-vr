import { Masonry } from "@mui/lab";
import ImageModal from "./ImageModal";

function ImageGallary() {
  const imageHeights = [
    550, 340, 240, 660, 720, 400, 520, 360, 680, 540, 450, 280, 440, 500, 620,
    240, 300, 760, 580, 420, 320, 270, 650, 460, 750, 560, 220, 480, 700, 350,
    640, 740, 200, 480, 720, 380, 600, 250, 540, 560, 520, 420, 450, 500, 460,
  ];

  return (
    <div>
      <h2 className="font-bold text-lg mb-1">Image Gallery</h2>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={1}>
        {imageHeights.map((height, index) => (
          <ImageModal key={index} height={height} index={index} />
        ))}
      </Masonry>
    </div>
  );
}

export default ImageGallary;
