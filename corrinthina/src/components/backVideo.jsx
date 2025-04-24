import React from 'react';

const BackgroundMedia = ({ src, lines = [], overlayContainerClass = '', overlayContainerStyle = {} }) => {
  const isVideo = src.match(/\.(mp4|webm|ogg|mov)$/i);

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

      {/* Overlay Text Container */}
      <div
        className={`absolute w-full h-full ${overlayContainerClass}`}
        style={overlayContainerStyle}
      >
        {lines.map((line, index) => (
          <h1
            key={index}
            className={line.className || ''}
            style={line.style || {}}
          >
            {line.text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default BackgroundMedia;
