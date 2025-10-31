"use client";

import { useState, useMemo, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import FeaturedNews from "../components/FeaturedNews";
import NewsCard from "../components/NewsCard";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import { newsData, newsDataLive } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/SidebarScoreWidget";
import RightSidebarNews from "@/components/RSidebarLatestNews";
import FloatingVideoPlayer from "@/components/FloatingVideoPlayer";

const Home = () => {
  const { language } = useLanguage();
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);
  const articlesPerPage = 6;

  // This function transforms a single API article into the format our components expect.
  const transformNewsItem = (item) => ({
    id: item._id, // Map _id from API to id
    title: item.title,
    description: item.summary, // Map summary from API to description
    fullDescription: item.content, // Map content from API to fullDescription
    image: item.featuredImage?.url, // Map featuredImage.url from API to image
    category: item.category,
    date: item.publishAt, // Map publishAt to date
    youtubeVideoId: item.youtubeVideoId,
  });

  // Fetch data on the client side
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await newsDataLive();
        console.log("Raw API response:", response.data.items);
        // The API response is an array directly, so we map over it.
        const transformedNews = (response.data.items || []).map(transformNewsItem);  //Todo here i'll do it tommorrow
        // const transformedNews = (response.data || []).map(transformNewsItem);
        setAllNews(transformedNews);
      } catch (error) {
        console.error("Failed to fetch live news data:", error);
        setAllNews(newsData); // Fallback to static data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const featuredNews = useMemo(() => allNews[0], [allNews]);
  const allOtherNews = useMemo(() => allNews.slice(1), [allNews]);
  console.log("AllOtherNews:", allOtherNews);
  const videosPerPage = 4;
  const videoNews = useMemo(
    () => allNews.filter((item) => item.youtubeVideoId),
    [allNews]
  );

  const totalVideoPages = Math.ceil(videoNews.length / videosPerPage);
  const currentVideos = useMemo(() => {
    const start = (videoPage - 1) * videosPerPage;
    return videoNews.slice(start, start + videosPerPage);
  }, [videoPage, videoNews, videosPerPage]);

  // Pagination logic
  const totalPages = Math.ceil(allOtherNews.length / articlesPerPage);
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return allOtherNews.slice(startIndex, startIndex + articlesPerPage);
  }, [currentPage, allOtherNews, articlesPerPage]);

  const handlePlayVideo = (videoId) => {
    setPlayingVideoId(videoId);
  };
  const handleCloseModal = () => {
    setPlayingVideoId(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 min-h-[60vh]">
          <div className="container mx-auto px-4">
            <Breadcrumb />
            <div className="bg-gray-50 min-h-screen">
              <div className="max-w-7xl px-4 lg:px-4 mx-auto py-4">
                {/* Featured News Section */}
                <div className="mb-12">
                  <FeaturedNews news={featuredNews} />
                </div>

                {/* Video News Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-red-700 pl-4 mb-6">
                    {language === "hi" ? "वीडियो समाचार" : "Video News"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentVideos.map((video) => (
                      <VideoCard
                        key={video.id}
                        video={video}
                        onPlay={handlePlayVideo}
                      />
                    ))}
                  </div>
                  <Pagination
                    currentPage={videoPage}
                    totalPages={totalVideoPages}
                    onPageChange={setVideoPage}
                  />
                </div>

                {/* Latest News Section */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-red-700 pl-4 mb-6">
                    {language === "hi" ? "ताज़ा खबरें" : "Latest News"}
                  </h2>
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
            </div>
          </div>
        </main>
        <RightSidebarNews />
      </div>
      <FloatingVideoPlayer />
      <VideoModal videoId={playingVideoId} onClose={handleCloseModal} />
    </>
  );
};

export default Home;
