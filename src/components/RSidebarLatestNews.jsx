"use client";
// src/components/RightSidebarNews.jsx
import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import GoogleAds from "./GoogleAds";
import AdComponent from "./AdComponent";
import Link from "next/link";
import { useGetLiveVideoQuery } from "@/store/api/youtubeApi";

const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;
const RightSidebarNews = () => {
  const { language } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    data: liveVideoData,
    error: liveError,
    isLoading: isLiveLoading,
  } = useGetLiveVideoQuery();
  console.log("Live video data:", liveVideoData);

  const liveVideoId = liveVideoData?.video?.items?.[0]?.id?.videoId;
  const isLive = liveVideoData?.isLive;

  const [currentVideoId, setCurrentVideoId] = useState(null);

  // Set the current video ID once the live video data is available
  useEffect(() => {
    if (liveVideoId) {
      setCurrentVideoId(liveVideoId);
    }
  }, [liveVideoId]);

  function handlePlayRecentVideos(videoId) {
    setCurrentVideoId(videoId);
  }

  const renderPlayer = () => {
    if (isLiveLoading) {
      return (
        <p className="text-white text-center text-lg">
          Searching for live stream...
        </p>
      );
    }

    if (liveError) {
      return (
        <p className="text-red-400 text-center text-lg">
          {liveError.data?.message || "Could not fetch video."}
        </p>
      );
    }

    if (currentVideoId) {
      const liveStreamUrl = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1`;
      return (
        <div className="w-full aspect-video">
          <iframe
            src={liveStreamUrl}
            title="Live News Broadcast"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      );
    }

    return <p className="text-white text-center text-lg">No video found.</p>;
  };

  const exitPoleDummy = {
    2025: {
      parties: [
        { name: "NDA", seats: 120 },
        { name: "INDIA", seats: 80 },
        { name: "OTHERS", seats: 60 },
      ],
      total_seats: 243,
      last_updated: "2025-10-22T12:00:00Z",
    },
  };
  const langParam = language === "hi" ? "hi" : "en";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const cacheKey = `latestNewsCache`; // Use a single cache key
    const cacheDuration = 60 * 30 * 1000; // 30 minutes in milliseconds

    const loadNews = async () => {
      // Try to load from cache first
      try {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
          // Check if cache exists
          const { news: cachedNews, timestamp } = JSON.parse(cachedData); // news will contain both en and hi
          const cacheAge = new Date() - new Date(timestamp);

          if (cacheAge < cacheDuration) {
            setNews(cachedNews[langParam] || []); // Use the news for the current language
            setLoading(false);
            return; // Use cached data
          }
        }
      } catch (error) {
        console.error("Error reading from cache:", error);
      }

      // If cache is old or doesn't exist, fetch new news
      try {
        // Fetch both languages at once
        const [enResponse, hiResponse] = await Promise.all([
          fetch(
            `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&q=bihar%20jharkhand%20politics`,
            { signal }
          ),
          fetch(
            `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=hi&q=bihar%20jharkhand%20politics`,
            { signal }
          ),
        ]);

        if (!enResponse.ok || !hiResponse.ok) throw new Error(`HTTP error`);

        const enData = await enResponse.json();
        const hiData = await hiResponse.json();

        if (enData.results && hiData.results) {
          const newsToCache = {
            en: enData.results.slice(0, 10),
            hi: hiData.results.slice(0, 10),
          };
          setNews(newsToCache[langParam]); // Set current language news
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              news: newsToCache,
              timestamp: new Date().toISOString(),
            })
          );
        }
      } catch (error) {
        if (error.name !== "AbortError")
          console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();

    return () => controller.abort();
    // <<<<<<< HEAD
    //   }, [language]);

    // =======
  }, [langParam]);

  console.log("Right side bar news", news);

  return (
    <aside
      className={
        "hidden lg:flex flex-col w-64 bg-white border-l  p-2 py-4 border-gray-300 overflow-y-auto shadow-lg "
      }
    >
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-xl font-semibold">
          {isLive && currentVideoId === liveVideoId
            ? "Live Video"
            : "Latest Video"}
        </p>

        <div className=" bg-black aspect-video rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          {renderPlayer()}
        </div>

        {/* News */}
        <div className="p-2 pb-4 bg-gray-100 rounded-md">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-red-700 text-left">
              {language === "hi"
                ? "नवीनतम बिहार और झारखंड राजनीति"
                : "Latest Bihar & Jharkhand Politics"}
            </h2>
          </div>

          {loading && (
            <p className="text-center text-gray-500">
              {language === "hi" ? "लोड हो रहा है..." : "Loading..."}
            </p>
          )}

          <div className="overflow-y-scroll max-h-[500px]">
            {news.map((item, index) => (
              <div
                key={index}
                className="mb-3 p-3 border border-gray-300 rounded-md hover:shadow-md transition-shadow bg-white"
              >
                <Link
                  target="_blank"
                  href={`${item.link}`}
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  {item.title}
                </Link>
                <p className="text-xs text-gray-500 mt-1">
                  {item.pubDate ? new Date(item.pubDate).toLocaleString() : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our ads */}
      <AdComponent
        adImage="https://image.thum.io/get/width/240/crop/1200/https://www.oyorooms.com/"
        title="Oyo Rooms"
        adLink="https://www.oyorooms.com/"
      />

      <AdComponent
        adImage="https://image.thum.io/get/width/240/crop/1200/https://www.cardekho.com/"
        title="CarDekho"
        adLink="https://www.cardekho.com/"
      />

      {/* MostRead removed */}
    </aside>
  );
};

export default RightSidebarNews;
