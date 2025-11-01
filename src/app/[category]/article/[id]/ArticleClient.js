"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

export default function ArticleClient({ article }) {
  const { language } = useLanguage();

  // Add safe access with fallbacks
  const title =
    article?.title?.[language] || article?.title?.en || "No title available";
  const description =
    article?.fullDescription?.[language] ||
    article?.fullDescription?.en ||
    "No content available";

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Optional: Add published date */}
      {article?.date && (
        <p className="text-gray-500 text-sm mb-2">
          Published: {new Date(article.date).toLocaleDateString()}
        </p>
      )}

      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      <Image
        src={article.image || "/Ap-news-article.png"}
        alt={title}
        width={800}
        height={450}
        className="w-full h-auto object-cover rounded-lg mb-4"
        priority={true}
        onError={(e) => {
          if (!e.target.dataset.fallback) {
            e.target.dataset.fallback = "true";
            e.target.src = "/Ap-news-article.png";
          }
        }}
      />

      <p className="text-lg mb-4 whitespace-pre-line">{description}</p>

      <ShareButtons
        title={title}
        url={`/${article?.category}/article/${article?.id}`}
      />
    </div>
  );
}
