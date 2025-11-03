import {useState, useEffect} from "react";
import Link from "next/link";
import {useLanguage} from "../context/LanguageContext";
import ShareButtons from "./ShareButtons";
const VIEWS_KEY = "apnews_views";

const NewsCard = ({news}) => {
  const {language} = useLanguage();
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={news.image}
          alt={news.title[language]}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-red-700 text-white px-3 py-1 text-xs font-semibold uppercase">
          {news.category
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join(" ")}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-red-700 transition-colors">
          <Link href={`/${news.category.toLowerCase()}/article/${news.id}`}>
            {news.title[language]}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {news.description[language]}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500 min-h-[16px]">
            {isClient &&
              new Date(news.date).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
          </span>
          <div className="flex items-center space-x-3">
            <Link
              href={
                news.category == "General"
                  ? `/news/article/${news.id}`
                  : `/${news.category.toLowerCase()}/article/${news.id}`
              }
              onClick={recordView}
              className="text-red-700 text-sm font-semibold hover:underline"
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
