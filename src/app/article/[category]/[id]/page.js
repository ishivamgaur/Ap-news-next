"use client";
// Force rebuild

import { useParams } from "next/navigation";
import { useGetArticleByIdQuery } from "@/store/api/articleApi";
import { useLanguage } from "@/context/LanguageContext";
import ShareButtons from "@/components/ShareButtons";
import Image from "next/image";
import ArticleDetailSkeleton from "@/components/ArticleDetailSkeleton";
import Link from "next/link";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const { data: rawArticle, isLoading, isError } = useGetArticleByIdQuery(id);
  console.log("Article Data:", rawArticle);

  const article = rawArticle?.article || rawArticle?.data || rawArticle;

  if (isLoading) {
    return <ArticleDetailSkeleton />;
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Article Not Found
        </h1>
        <Link
          href="/"
          className="px-6 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    );
  }

  // Helper to safely get content based on language
  const getLocalizedContent = (field) => {
    if (!article[field]) return "";
    return article[field][language] || article[field]["en"] || "";
  };

  const title = getLocalizedContent("title");
  const description = getLocalizedContent("description");
  const content = getLocalizedContent("content"); // Assuming content is HTML or rich text
  const category = article.category || "General";
  const date = new Date(
    article.publishAt || article.createdAt
  ).toLocaleDateString(language === "hi" ? "hi-IN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="mb-8">
          <span className="inline-block bg-red-50 text-red-700 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-red-100">
            {category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-serif">
            {title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-6 text-gray-600 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                  <FaUser size={14} />
                </div>
                <span>AP News Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" />
                <span>{date}</span>
              </div>
            </div>
            <ShareButtons title={title} url={`/${category}/article/${id}`} />
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden shadow-sm bg-gray-100">
          <Image
            src={article.featuredImage?.url || "/Ap-news.png"}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Summary / Description */}
        {description && (
          <div className="mb-8 p-6 bg-gray-50 rounded-xl border-l-4 border-red-700">
            <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed font-serif">
              {description}
            </p>
          </div>
        )}

        {/* Main Content */}
        <article className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-red-700 hover:prose-a:text-red-800 prose-img:rounded-xl prose-strong:text-gray-900">
          <div dangerouslySetInnerHTML={{ __html: content || "" }} />
        </article>

        {/* Footer Share */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <span className="font-bold text-gray-900">Share this article:</span>
          <ShareButtons title={title} url={`/${category}/article/${id}`} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
