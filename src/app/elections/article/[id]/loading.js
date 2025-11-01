export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="animate-pulse">
        {/* Title Placeholder */}
        <div className="h-10 bg-gray-300 rounded w-3/4 mb-6"></div>

        {/* Image Placeholder */}
        <div className="w-full h-[450px] bg-gray-300 rounded-lg mb-4"></div>

        {/* Description Placeholder */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
