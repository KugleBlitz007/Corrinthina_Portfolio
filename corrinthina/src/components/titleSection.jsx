import React from 'react';

const TitleSection = ({ lines = [], overlayContainerClass = '', overlayContainerStyle = {} }) => {

  return (
    <div className="relative w-full">
      
      {/* Overlay Text Container */}
      <div
        className={`w-full h-full ${overlayContainerClass}`}
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

export default TitleSection;
