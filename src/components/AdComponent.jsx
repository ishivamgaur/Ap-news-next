import React from "react";

const AdComponent = ({
  adImage,
  adLink = "#",
  title,
  altText = "Advertisement",
}) => {
  return (
    <div className="my-4 rounded-lg overflow-hidden shadow-md relative group">
      <a
        href={adLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={adImage}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {title && (
          <div
            title={title}
            className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-b from-black/0 via-black/30 to-black/60 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4"
          >
            <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              {title}
            </h3>
          </div>
        )}
      </a>
      <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        Ad
      </span>
    </div>
  );
};

export default AdComponent;
