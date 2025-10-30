"use client";
// src/components/RightSidebarNews.jsx
import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import GoogleAds from "./GoogleAds";
import AdComponent from "./AdComponent";
import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;
const RightSidebarNews = () => {
  const { language } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <aside
      className={
        "hidden lg:flex flex-col w-64 bg-white border-l  p-2 py-4 border-gray-300 overflow-y-auto shadow-lg "
      }
    >
      <div className="flex flex-col gap-4">
        {/* ads */}
        {/* <GoogleAds adSlot="4686474218" adFormat="auto" /> */}
        {/* Exit pole */}
        <div className="p-2 pb-4 bg-gray-100 rounded-md">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-red-700 text-left">
              {language === "hi"
                ? "एग्जिट पोल बिहार 2025"
                : "Exit Poll Bihar 2025"}
            </h2>
            <p className="text-xs text-gray-500">
              {language === "hi"
                ? `कुल सीटें: ${exitPoleDummy[2025].total_seats}`
                : `Total Seats: ${exitPoleDummy[2025].total_seats}`}
            </p>
          </div>

          <div className="space-y-4">
            {exitPoleDummy[2025].parties.map((party, index) => (
              <div key={index} className="text-sm">
                <div className="flex justify-between mb-1 font-semibold">
                  <span>{party.name}</span>
                  <span>{party.seats}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-red-600 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (party.seats / exitPoleDummy[2025].total_seats) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right mt-2 text-xs text-gray-400">
            {language === "hi" ? "अंतिम अपडेट: " : "Last Updated: "}
            {new Date(exitPoleDummy[2025].last_updated).toLocaleDateString()}
          </div>
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
                  href={`/news/article/${item.article_id}`}
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
