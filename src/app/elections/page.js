"use client";
import { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";
import {
  newsData,
  newsDataLive,
  getElectionsArticles,
} from "../../data/newsData";

const Elections = () => {
  const [electionArticles, setElectionArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const transformNewsItem = (item) => ({
    id: item._id,
    title: item.title,
    description: item.summary,
    fullDescription: item.content,
    image: item.featuredImage?.url,
    category: item.category,
    date: item.publishAt,
    youtubeVideoId: item.youtubeVideoId,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getElectionsArticles();
        const allNews = (response.data.articles || []).map(transformNewsItem);
        const filteredNews = allNews.filter(
          (item) => item.category.toUpperCase() === "ELECTIONS"
        );
        setElectionArticles(filteredNews);
      } catch (error) {
        console.error("Failed to fetch live news data:", error);
        // Fallback to static data on error
        const filteredStaticNews = newsData.filter(
          (item) => item.category.toUpperCase() === "ELECTIONS"
        );
        setElectionArticles(filteredStaticNews);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 border-l-4 border-red-700 pl-4">
            Elections
          </h1>
          <p className="text-gray-600 mt-2 pl-4">
            Political coverage and election updates
          </p>
        </div>

        {isLoading ? (
          <div className="text-center">Loading articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electionArticles.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Elections;
