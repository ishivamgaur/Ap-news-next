const FeaturedNewsSkeleton = () => {
  return (
    <div className="relative h-96 overflow-hidden rounded-lg shadow-xl bg-gray-200 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-gray-300 h-5 w-24 rounded mb-4"></div>
          <div className="bg-gray-300 h-8 w-3/4 rounded mb-3"></div>
          <div className="bg-gray-300 h-8 w-1/2 rounded mb-4"></div>
          <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
          <div className="bg-gray-300 h-4 w-5/6 rounded mb-6"></div>
          <div className="bg-gray-400 h-12 w-40 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsSkeleton;