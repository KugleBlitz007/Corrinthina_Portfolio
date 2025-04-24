import React from 'react';

const BackgroundMedia = ({ src }) => {
  const isVideo = src.match(/\.(mp4|webm|ogg|mov)$/i); // checks file extension

  return (
    <div className="relative w-full">
      {/* Background Media */}
      {isVideo ? (
        <video
          className="w-full bg-cover object-contain"
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          className="w-full h-full object-cover"
          src={src}
          alt="Background"
        />
      )}

      {/* Overlay Text */}
      <div className="absolute top-5 left-5 w-full h-full grid grid-cols-1">
        <h1 className="text-4xl ml-[10%] -mb-10 mt-10 text-[250px] text-[#DC065F]">WELCOME</h1>
        <h1 className="text-4xl ml-[10%] font-bold text-[100px] text-[#DC065F]">To my</h1>
        <h1 className="text-4xl ml-[10%] font-extralight italic text-[100px] text-[#FFE0E0]">(personal)</h1>
        <h1 className="text-4xl ml-[5%] mb-5 text-[250px] font-Inder text-[#DC065F]">PORTFOLIO</h1>
      </div>
    </div>
  );
};

export default BackgroundMedia;
