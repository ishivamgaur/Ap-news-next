import React from "react";
import FacebookEmbed from "./FacebookEmbed.jsx";
import { useLanguage } from "../context/LanguageContext";

const FacebookCard = ({ post }) => {
  const { language } = useLanguage();
  const { title, facebookPostUrl } = post;

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full mx-auto">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-md leading-tight line-clamp-2">
          {title[language]}
        </h3>
      </div>
      {/* The embed itself will be the main content */}
      <FacebookEmbed postUrl={facebookPostUrl} />
    </div>
  );
};

export default FacebookCard;
