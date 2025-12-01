export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-6 lg:pt-6 xl:pt-8 2xl:pt-10 pb-12 lg:pb-12 xl:pb-16 2xl:pb-20">
      <div className="max-w-5xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-4">
        {/* Header Skeleton */}
        <div className="mb-6 lg:mb-6 xl:mb-8 2xl:mb-10 animate-pulse">
          <div className="h-6 w-24 bg-gray-200 rounded-full mb-3 lg:mb-3 xl:mb-4"></div>
          <div className="h-8 md:h-10 w-3/4 bg-gray-200 rounded mb-4 lg:mb-4 xl:mb-6"></div>
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
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
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden bg-gray-200 animate-pulse"></div>

        {/* Content Skeleton */}
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}
