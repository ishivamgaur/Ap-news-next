import React from "react";

const ArticleDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-8 pb-16 animate-pulse">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Header Skeleton */}
        <div className="mb-8">
          {/* Category Tag */}
          <div className="h-6 w-24 bg-gray-200 rounded-full mb-4"></div>

          {/* Title - 2 lines */}
          <div className="h-10 w-full bg-gray-200 rounded mb-3"></div>
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-6"></div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="h-8 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Featured Image Skeleton */}
        <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden bg-gray-200"></div>

        {/* Summary Skeleton */}
        <div className="mb-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-200">
          <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-6 w-5/6 bg-gray-200 rounded"></div>
        </div>

        {/* Content Skeleton - Multiple paragraphs */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>

          <div className="h-4 w-full bg-gray-200 rounded mt-6"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-200 rounded"></div>

          <div className="h-4 w-full bg-gray-200 rounded mt-6"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailSkeleton;
