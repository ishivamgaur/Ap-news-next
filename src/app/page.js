"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "../components/Breadcrumb";
import FeaturedNews from "../components/FeaturedNews";
import NewsCard from "../components/NewsCard";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import { newsData } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/SidebarScoreWidget";
import RightSidebarNews from "@/components/RSidebarLatestNews";
import FloatingVideoPlayer from "@/components/FloatingVideoPlayer";

const Home = () => {
  const { language } = useLanguage();
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);
  const articlesPerPage = 6;

  const featuredNews = useMemo(() => newsData[0], []);
  const allOtherNews = useMemo(() => newsData.slice(1), []);
  const videosPerPage = 4;
  const videoNews = useMemo(
    () => newsData.filter((item) => item.youtubeVideoId),
    []
  );

  const totalVideoPages = Math.ceil(videoNews.length / videosPerPage);
  const currentVideos = useMemo(() => {
    const start = (videoPage - 1) * videosPerPage;
    return videoNews.slice(start, start + videosPerPage);
  }, [videoPage, videoNews]);

  // Pagination logic
  const totalPages = Math.ceil(allOtherNews.length / articlesPerPage);
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return allOtherNews.slice(startIndex, startIndex + articlesPerPage);
  }, [currentPage, allOtherNews]);

  const handlePlayVideo = (videoId) => {
    setPlayingVideoId(videoId);
  };
  const handleCloseModal = () => {
    setPlayingVideoId(null);
  };

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
