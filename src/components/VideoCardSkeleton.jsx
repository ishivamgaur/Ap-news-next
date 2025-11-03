const VideoCardSkeleton = () => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-300 animate-pulse h-48">
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
        </div>
        <div>
          <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};
export default VideoCardSkeleton;