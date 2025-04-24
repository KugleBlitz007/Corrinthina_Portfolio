import React from "react";

const GalleryMasonry = ({ title, titleStyle = "", images = [] }) => {
  return (
    <div className=" px-6 py-10 ">
      <h1 className={`text-4xl font-bold text-center mb-10 ${titleStyle}`}>
        {title}
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full mb-4 rounded-lg hover:opacity-90 break-inside-avoid"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryMasonry;
