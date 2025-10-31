import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";


const FeaturedNews = ({ news }) => {
  const { language } = useLanguage();
  console.log("FeaturedNews news prop:", news);

  if (!news) return null; // Add a guard clause in case news is not available

  return (
    <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
      <img
        src={news.image}
        alt={news.title[language]}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="bg-red-700 px-3 py-1 text-xs font-semibold uppercase rounded">
            {news.category
              .split(" ")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
              .join(" ")}
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-2">
            {news.title[language]}
          </h2>
          <p className="text-gray-300 mb-4 line-clamp-2">
            {news.description[language]}
          </p>
          <Link
            href={`/${news.category.toLowerCase()}/article/${news.id}`}
            className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            {language === "hi" ? "पूरी कहानी पढ़ें" : "Read Full Story"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
