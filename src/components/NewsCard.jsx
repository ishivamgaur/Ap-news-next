import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import ShareButtons from "./ShareButtons";
const VIEWS_KEY = "apnews_views";

const NewsCard = ({ news }) => {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const recordView = () => {
    try {
      const raw = localStorage.getItem(VIEWS_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      parsed[news.id] = (parsed[news.id] || 0) + 1;
      localStorage.setItem(VIEWS_KEY, JSON.stringify(parsed));
    } catch (e) {
      // ignore
    }
  };
  // bookmark feature removed

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative h-48 overflow-hidden">
        <Link
          href={
            news.category == "General"
              ? `/news/article/${news.id}`
              : `/${news.category.toLowerCase()}/article/${news.id}`
          }
        >
          <img
            src={news.image || "/Ap-news.png"}
            alt={news.title[language]}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/Ap-news.png";
            }}
          />
        </Link>
        <span className="absolute top-3 left-3 bg-linear-to-r from-red-600 to-red-700 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
          {news.category
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join(" ")}
        </span>
      </div>
      <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="font-bold text-sm lg:text-sm xl:text-base mb-2 line-clamp-2 text-gray-900 group-hover:text-red-700 transition-colors leading-tight">
          <Link
            href={
              news.category == "General"
                ? `/news/article/${news.id}`
                : `/${news.category.toLowerCase()}/article/${news.id}`
            }
          >
            {news.title[language]}
          </Link>
        </h3>
        <div className="grow">
          <p className="text-gray-600 text-[10px] lg:text-[10px] xl:text-[11px] font-medium line-clamp-3 mb-2">
            {news.description[language]}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[9px] lg:text-[8px] xl:text-[9px] text-gray-400 font-medium">
            {isClient &&
              new Date(news.date).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
          </span>
          <div className="flex items-center space-x-2">
            <Link
              href={
                news.category == "General"
                  ? `/news/article/${news.id}`
                  : `/${news.category.toLowerCase()}/article/${news.id}`
              }
              onClick={recordView}
              className="text-white bg-red-700 hover:bg-red-800 px-3 py-1 rounded-full text-[9px] lg:text-[8px] xl:text-[9px] font-bold transition-colors shadow-sm hover:shadow-md"
            >
              {language === "hi" ? "और पढ़ें" : "Read More"}
            </Link>
            <ShareButtons
              title={news.title[language]}
              url={
                news.category == "General"
                  ? `/news/article/${news.id}`
                  : `/${news.category.toLowerCase()}/article/${news.id}`
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
