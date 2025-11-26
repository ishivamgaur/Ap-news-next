"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { newsData } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";

const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;

const HighlightsBar = () => {
  const { language } = useLanguage();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const cacheKey = "highlightsCache";
    const cacheDuration = 60 * 30 * 1000; // 30 minutes in milliseconds

    const loadHighlights = async () => {
      setLoading(true);
      const langParam = language === "hi" ? "hi" : "en";

      // Try to load from cache first
      try {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
          const { highlights, timestamp } = JSON.parse(cachedData);
          if (new Date() - new Date(timestamp) < cacheDuration) {
            setItems(highlights[langParam] || []);
            setLoading(false);
            return; // Use cached data
          }
        }
      } catch (error) {
        console.error("Error reading highlights from cache:", error);
      }

      // If cache is old or doesn't exist, fetch new highlights
      try {
        const [enRes, hiRes] = await Promise.all([
          fetch(
            `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&q=bihar`,
            { signal }
          ),
          fetch(
            `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=hi&q=bihar`,
            { signal }
          ),
        ]);

        if (!enRes.ok || !hiRes.ok) throw new Error(`HTTP error`);

        const enData = await enRes.json();
        const hiData = await hiRes.json();

        if (enData.results && hiData.results) {
          const highlightsToCache = {
            en: enData.results.slice(0, 10),
            hi: hiData.results.slice(0, 10),
          };
          setItems(highlightsToCache[langParam]);
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              highlights: highlightsToCache,
              timestamp: new Date().toISOString(),
            })
          );
        }
      } catch (err) {
        if (err.name !== "AbortError")
          console.error("Highlights fetch failed:", err);
        setItems([...newsData].sort(() => 0.5 - Math.random()).slice(0, 10));
      } finally {
        setLoading(false);
      }
    };

    loadHighlights();
    return () => controller.abort();
  }, [language]);

  const highlightItems = useMemo(() => {
    return items;
  }, [items]);

  // helper to read title depending on API or local shape
  const getTitle = (item) => {
    if (!item) return "";
    // local data: title is object { en, hi }
    if (item.title && typeof item.title === "object")
      return item.title[language];
    // API data: title is a string
    if (typeof item.title === "string") return item.title;
    // some APIs may use 'title[language]' style
    if (item.title && item.title[language]) return item.title[language];
    return item.title || item.description || "";
  };

  const getHref = (item) => {
    if (item.link) {
      return item.link;
    }
    const category = item.category?.toLowerCase() || "news";
    return `/${category}/article/${item.id || item.article_id}`;
  };

  return (
    <div className="highlights-bar h-10 flex items-center group fixed bottom-0 left-0 right-0 bg-red-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-14">
        <div className="shrink-0">
          <span className="font-bold bg-white text-red-800 px-3 py-[4px] text-sm rounded">
            {language === "hi" ? "हाइलाइट" : "HIGHLIGHTS"}
          </span>
        </div>
        <div className="grow overflow-x-hidden whitespace-nowrap relative">
          <div className="marquee-container">
            <div className="marquee-content">
              {loading && (
                <span className="mx-6 text-sm">
                  {language === "hi" ? "लोड हो रहा है..." : "Loading..."}
                </span>
              )}

              {highlightItems.map((item, index) => (
                <Link
                  href={getHref(item)}
                  key={`first-${item.id || item.article_id || index}`}
                  className="mx-6 text-sm font-bold hover:underline shrink-0"
                  target={item.link ? "_blank" : ""}
                  rel={item.link ? "noopener noreferrer" : ""}
                >
                  {getTitle(item)}
                </Link>
              ))}
            </div>
            <div className="marquee-content">
              {highlightItems.map((item, index) => (
                <Link
                  href={getHref(item)}
                  key={`second-${item.id || item.article_id || index}`}
                  className="mx-6 text-sm hover:underline shrink-0"
                  target={item.link ? "_blank" : ""}
                  rel={item.link ? "noopener noreferrer" : ""}
                >
                  {getTitle(item)}
                </Link>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-8 h-full bg-linear-to-r from-red-900 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-8 h-full bg-linear-to-l from-red-900 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default HighlightsBar;
