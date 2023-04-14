import { Masonry } from "@mui/lab";
import ImageModal from "./ImageModal";
import imageList from "~/assets/images/imageList";

function ImageGallary() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-1">Image Gallery</h2>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={1}>
        {imageList.map((src, index) => (
          <ImageModal key={index} src={src} />
        ))}
      </Masonry>
    </div>
  );
}

export default ImageGallary;
