import React from 'react';

const ImageLink = ({ src, href, alt, className }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img 
        className={className}
        src={src}
        alt={alt} 
      />
    </a>
  );
};

export default ImageLink;
