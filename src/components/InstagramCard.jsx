import React from "react";
import InstagramEmbed from "./InstagramEmbed.jsx";
import { useLanguage } from "../context/LanguageContext";

const InstagramCard = ({ post }) => {
  const { language } = useLanguage();
  const { title, instagramPostId } = post;

  return (
    <div className="flex flex-col min-h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full mx-auto">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-md leading-tight line-clamp-2">
          {title[language]}
        </h3>
      </div>
      {/* The embed itself will be the main content */}
      <InstagramEmbed postId={instagramPostId} />
    </div>
  );
};

export default InstagramCard;
