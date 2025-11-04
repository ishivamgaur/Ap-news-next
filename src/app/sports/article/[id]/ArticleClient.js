"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";
import { useState } from "react";

export default function ArticleClient({ article }) {
  console.log("article: ", article)
  const { language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  // Safe access with fallbacks
  const title =
    article?.title?.[language] || article?.title?.en || "No title available";
  const summary =
    article?.description?.[language] ||
    article?.description?.en ||
    "No summary available";
  const description =
    article?.fullDescription?.[language] ||
    article?.fullDescription?.en ||
    "No content available";

  const imageSrc = imageError ? "/Ap-news-article.png" : article?.image || "/Ap-news-article.png";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Article Header */}
      <div className="mb-8">
        {article?.date && (
          <p className="text-gray-500 text-sm mb-3">
            Published: {new Date(article.date).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
        
        {article?.category && (
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            {article.category}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
      </div>

      {/* Featured Image with 16:9 Video Aspect Ratio */}
      <div className="mb-8">
        <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            onError={() => setImageError(true)}
            quality={85}
          />
        </div>
        {article?.imageCredit && (
          <p className="text-xs text-gray-500 mt-2 text-right">
            Credit: {article.imageCredit}
          </p>
        )}
      </div>

      {/* Summary Section */}
      <div className="mb-8">
        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Article Summary
          </h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {summary.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="mb-8">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Description</h2>
          <div className="text-gray-700 leading-7 whitespace-pre-line">
            {description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {Math.ceil(description.split(' ').length / 200)} min read
          </div>
          
          <ShareButtons
            title={title}
            url={`/${article?.category}/article/${article?.id}`}
          />
        </div>
      </div>
    </div>
  );
}