"use client";
import { useState, useCallback, useRef } from "react";
import NewsCard from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import { useGetBhojpuriArticlesQuery } from "@/store/api/articleApi";

const BhojpuriPage = () => {
  const [page, setPage] = useState(1);
  const observer = useRef();
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

  const { data, isLoading, isFetching, isError } =
    useGetBhojpuriArticlesQuery(page);

  const articles = (data?.articles || []).map(transformNewsItem);
  const hasMore = data ? articles.length < data.total : false;

  const lastNewsElementRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, hasMore]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isLoading && page === 1 ? (
          <>
            <div className="mb-6 animate-pulse">
              <div className="h-10 bg-gray-300 rounded w-48 border-l-4 border-gray-300 pl-4"></div>
              <div className="h-4 bg-gray-300 rounded w-72 mt-4 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <NewsCardSkeleton key={index} />
              ))}
            </div>
          </>
        ) : articles.length > 0 ? (
          !isError ? (
            <>
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 border-l-4 border-red-700 pl-4">
                  Bhojpuri
                </h1>
                <p className="text-gray-600 mt-2 pl-4">
                  Entertainment, music, and news from the Bhojpuri world
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((news, i) => (
                  <div
                    key={news.id}
                    ref={i === articles.length - 1 ? lastNewsElementRef : null}
                  >
                    <NewsCard news={news} />
                  </div>
                ))}
                {isFetching &&
                  [...Array(3)].map((_, index) => (
                    <NewsCardSkeleton key={`skeleton-${index}`} />
                  ))}
              </div>
            </>
          ) : null
        ) : (
          <div className="text-center col-span-full py-16">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Articles Found
            </h2>
            <p className="text-gray-500 mt-2">
              There are currently no news articles available in this category.
              Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BhojpuriPage;
