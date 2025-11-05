"use client";
import {useState, useEffect} from "react";
import {FaCircle} from "react-icons/fa";
import apiClient from "../../api"; // Import the configured axios instance
import Link from "next/link";

const LiveNewsPage = () => {
  const [videoInfo, setVideoInfo] = useState({id: null, isLive: false});
  const [recentVideos, setRecentVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecentLoading, setIsRecentLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveVideo = async () => {
      try {
        // Use axios to fetch from your backend. The baseURL is already set.
        const response = await apiClient.get("/youtube/live");
        const {video, isLive} = response.data;

        if (video?.items?.length > 0) {
          setVideoInfo({
            id: video.items[0].id.videoId,
            isLive: isLive,
          });
        } else {
          setError("No live stream is currently active on this channel.");
        }
      } catch (error) {
        // Extract the specific error message from the backend response
        const errorMessage =
          error.response?.data?.message ||
          "Could not fetch video. Please try again later.";
        console.error(
          "Failed to fetch live video:",
          error.response?.data || error
        );
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchRecentVideos = async () => {
      try {
        const response = await apiClient.get("youtube/recent-videos");
        console.log("Recent Videos:", response.data);
        let allVideos = response.data.items || [];
        setRecentVideos(allVideos);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Could not fetch recent videos.";
        console.error(
          "Failed to fetch recent videos:",
          error.response?.data || error
        );
        setError(errorMessage);
      } finally {
        setIsRecentLoading(false);
      }
    };

    fetchLiveVideo();
    fetchRecentVideos();
  }, []);

  function handlePlayRecentVideos(videoId) {
    setVideoInfo({id: videoId, isLive: false});
  }

  const renderPlayer = () => {
    if (isLoading) {
      return (
        <p className="text-white text-center text-lg">
          Searching for live stream...
        </p>
      );
    }

    if (error) {
      return <p className="text-red-400 text-center text-lg">{error}</p>;
    }

    if (videoInfo.id) {
      const liveStreamUrl = `https://www.youtube.com/embed/${videoInfo.id}?autoplay=1&mute=1`;
      return (
        <div className="w-full aspect-video">
          <iframe
            src={liveStreamUrl}
            title="Live News Broadcast"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      );
    }

    return <p className="text-white text-center text-lg">No video found.</p>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 border-l-4 border-red-700 pl-4 flex items-center">
            {videoInfo.isLive ? "Live News" : "Latest Video"}
            {videoInfo.isLive && (
              <span className="relative flex h-3 w-3 ml-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
          </h1>
        </div>
        <p className="text-gray-600 mb-8 pl-4">
          {videoInfo.isLive
            ? "Watch our live broadcast and get real-time updates as they happen."
            : "Watch our most recent video."}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 bg-black rounded-lg overflow-hidden shadow-lg flex items-center justify-center min-h-[300px] lg:min-h-[450px]">
            {renderPlayer()}
          </div>

          {/* Live Updates Feed Placeholder */}
          <div className="lg:col-span-1">
            {/* Recent Videos Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                    </svg>
                    Recent Videos
                  </h2>
                  <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {recentVideos.length} items
                  </span>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                {isRecentLoading ? (
                  <div className="p-6 space-y-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="flex space-x-4">
                          <div className="bg-gray-200 rounded-lg w-16 h-16"></div>
                          <div className="flex-1 space-y-2">
                            <div className="bg-gray-200 rounded h-4 w-3/4"></div>
                            <div className="bg-gray-200 rounded h-3 w-full"></div>
                            <div className="bg-gray-200 rounded h-3 w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : recentVideos.length > 0 ? (
                  <div className="p-4 space-y-3">
                    {recentVideos.map((video, index) => (
                      <div
                        key={video.id.videoId || index}
                        onClick={() =>
                          handlePlayRecentVideos(video?.id?.videoId)
                        }
                        className="group cursor-pointer transition-all duration-200 hover:bg-gray-50 rounded-lg p-3 border border-transparent hover:border-gray-200"
                      >
                        <div className="flex space-x-3">
                          <div className="relative">
                            <img
                              src={
                                video.snippet.thumbnails.medium?.url ||
                                video.snippet.thumbnails.default.url
                              }
                              alt={video.snippet.title}
                              className="w-20 h-14 rounded-lg object-cover shadow-sm"
                            />
                            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                              3:45
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {video.snippet.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                              {video.snippet.channelTitle}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-gray-400">
                                {new Date(
                                  video.snippet.publishedAt
                                ).toLocaleDateString()}
                              </span>
                              <svg
                                className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <svg
                      className="w-12 h-12 text-gray-300 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm">No videos available</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Check back later for new content
                    </p>
                  </div>
                )}
              </div>

              {/* Footer with action button */}
              <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
                <button className="w-full flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors py-2">
                  <Link
                    href={"https://www.youtube.com/@apnewsbihar6217/videos"}
                    target="blank"
                  >
                    View All Videos
                  </Link>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNewsPage;
