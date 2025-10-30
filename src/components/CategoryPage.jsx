"use client";

import NewsCard from "./NewsCard";
import { newsData } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";
import { useState, useMemo } from "react";
import Pagination from "./Pagination";

const CategoryPage = ({ title, subtitle, category }) => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // If a category is provided, filter by it. Otherwise, use all data.
  const articles = category
    ? newsData.filter((item) => item.category === category)
    : newsData;

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return articles.slice(startIndex, startIndex + articlesPerPage);
  }, [currentPage, articles]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 border-l-4 border-red-700 pl-4">
            {title[language]}
          </h1>
          {subtitle && (
            <p className="text-gray-600 mt-2 pl-4">{subtitle[language]}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
