"use client";

import {useState, useEffect} from "react";
import NewsCard from "@/components/NewsCard.jsx";
import {newsData, newsDataLive} from "../../data/newsData.js";
import NewsCardSkeleton from "@/components/NewsCardSkeleton.jsx";

const AllNewsPage = () => {
  const [articles, setArticles] = useState([]);
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
        const response = await newsDataLive();
        const allNews = (response.data.items || []).map(transformNewsItem);
        // For this page, we display all news, so no filtering is needed.
        setArticles(allNews);
      } catch (error) {
        console.error("Failed to fetch live news data:", error);
        // Fallback to static data on error
        setArticles(newsData);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isLoading ? (
          <>
            {/* Skeleton for Header */}
            <div className="mb-6 animate-pulse">
              <div className="h-10 bg-gray-300 rounded w-48 border-l-4 border-gray-300 pl-4"></div>
              <div className="h-4 bg-gray-300 rounded w-72 mt-4 ml-4"></div>
            </div>
            {/* Skeleton for News Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(10)].map((_, index) => (
                <NewsCardSkeleton key={index} />
              ))}
            </div>
          </>
        ) : articles.length > 0 ? (
          <>
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 border-l-4 border-red-700 pl-4">
                Latest News
              </h1>
              <p className="text-gray-600 mt-2 pl-4">
                All the latest updates and stories
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center col-span-full py-16">
              <h2 className="text-2xl font-semibold text-gray-700">
                No Articles Found
              </h2>
              <p className="text-gray-500 mt-2">
                There are currently no news articles available. Please check
                back later.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllNewsPage;
