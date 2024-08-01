import ImageCard from "./ImageCard";
import {barImages} from "../assets/photoLibrary";
import {barImages2} from "../assets/photoLibrary";
import {barImages3} from "../assets/photoLibrary";

const ImageGallery = () => {

  return (
    <div id="card-container" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-2">
          {/* Loop so that its half images one column and other half in other. so probably a for or while loop */}
          {barImages.map((image) => (
            <ImageCard image={<img src={image} alt={`image ${image}`} />} />
          ))}
         
        </div>
        <div className="space-y-2">
          {/* Loop so that its half images one column and other half in other. so probably a for or while loop */}
          {barImages2.map((image) => (
            <ImageCard image={<img src={image} alt={`image ${image}`} />} />
          ))}
         
        </div>
        <div className="space-y-2">
          {/* Loop so that its half images one column and other half in other. so probably a for or while loop */}
          {barImages3.map((image) => (
            <ImageCard image={<img src={image} alt={`image ${image}`} />} />
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
