"use client";
import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import apiClient from "../../api"; // Import the configured axios instance

const LiveNewsPage = () => {
  const [videoInfo, setVideoInfo] = useState({ id: null, isLive: false });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveVideo = async () => {
      try {
        // Use axios to fetch from your backend. The baseURL is already set.
        const response = await apiClient.get("/youtube/live");
        const { video, isLive } = response.data;

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

    fetchLiveVideo();
  }, []);

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
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">
              Live Updates
            </h2>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <p className="text-center text-gray-500">
                Live updates will appear here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNewsPage;
