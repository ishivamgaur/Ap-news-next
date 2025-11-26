"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  useGetLiveVideoQuery,
  useGetRecentVideosQuery,
} from "@/store/api/youtubeApi";
import {
  FaPlay,
  FaYoutube,
  FaUsers,
  FaClock,
  FaShareAlt,
  FaCircle,
} from "react-icons/fa";

import JoinTeamPopup from "@/components/JoinTeamPopup";
import { useLanguage } from "@/context/LanguageContext";

const LiveNewsPage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      liveNow: "Live Now",
      latestVideo: "Latest Video",
      liveBroadcastTitle: "Live News Broadcast",
      studioTitle: "AP News Studio",
      share: "Share",
      subscribe: "Subscribe",
      breakingNewsTitle: "Breaking News: Live Coverage from Bihar & Jharkhand",
      topStoriesTitle: "Top Stories & Analysis",
      liveDescription:
        "Watch our live broadcast and get real-time updates as they happen. Stay informed with exclusive reports from our dedicated team.",
      topStoriesDescription:
        "Catch up on the latest developments. We bring you the stories that matter most to the region with in-depth analysis.",
      recentVideos: "Recent Videos",
      videosCount: "Videos",
      loading: "Loading content...",
      error: "Unable to load content.",
      selectVideo: "Select a video to play.",
      viewArchives: "View All Archives",
      joinCommunityTitle: "Join Our Growing Community",
      joinCommunityDesc:
        "Be part of the conversation. Subscribe to our channel for exclusive content, live debates, and behind-the-scenes access.",
      joinTeam: "Join Team",
      subscribeYouTube: "Subscribe on YouTube",
    },
    hi: {
      liveNow: "अभी लाइव",
      latestVideo: "नवीनतम वीडियो",
      liveBroadcastTitle: "लाइव समाचार प्रसारण",
      studioTitle: "एपी न्यूज़ स्टूडियो",
      share: "साझा करें",
      subscribe: "सदस्य बनें",
      breakingNewsTitle: "ब्रेकिंग न्यूज़: बिहार और झारखंड से लाइव कवरेज",
      topStoriesTitle: "प्रमुख खबरें और विश्लेषण",
      liveDescription:
        "हमारा लाइव प्रसारण देखें और पल-पल की अपडेट प्राप्त करें। हमारी समर्पित टीम की विशेष रिपोर्टों के साथ सूचित रहें।",
      topStoriesDescription:
        "नवीनतम घटनाओं पर नज़र डालें। हम आपके लिए क्षेत्र की सबसे महत्वपूर्ण कहानियाँ और गहन विश्लेषण लाते हैं।",
      recentVideos: "हालिया वीडियो",
      videosCount: "वीडियो",
      loading: "सामग्री लोड हो रही है...",
      error: "सामग्री लोड करने में असमर्थ।",
      selectVideo: "चलाने के लिए एक वीडियो चुनें।",
      viewArchives: "सभी संग्रह देखें",
      joinCommunityTitle: "हमारे बढ़ते समुदाय में शामिल हों",
      joinCommunityDesc:
        "बातचीत का हिस्सा बनें। विशेष सामग्री, लाइव बहस और पर्दे के पीछे की पहुंच के लिए हमारे चैनल को सब्सक्राइब करें।",
      joinTeam: "टीम में शामिल हों",
      subscribeYouTube: "YouTube पर सब्सक्राइब करें",
    },
  };

  const t = translations[language];

  // Use the RTK Query hook to fetch live video data.
  const {
    data: liveVideoData,
    error: liveError,
    isLoading: isLiveLoading,
  } = useGetLiveVideoQuery();

  // Fetch recent videos
  const {
    data: recentVideosData,
    error: recentError,
    isLoading: isRecentLoading,
  } = useGetRecentVideosQuery();

  const liveVideoId = liveVideoData?.video?.items?.[0]?.id?.videoId;
  const isLive = liveVideoData?.isLive;
  const recentVideos = recentVideosData?.items || [];

  // Local state to manage which video is currently playing in the iframe
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [isJoinPopupOpen, setIsJoinPopupOpen] = useState(false);

  // Effect to set the initial video (Live > First Recent)
  useEffect(() => {
    // If a video is already selected (by user or previous default), don't override it
    if (currentVideoId) return;

    if (liveVideoId) {
      setCurrentVideoId(liveVideoId);
    } else if (!isLiveLoading && recentVideos.length > 0) {
      // If not live and recent videos are loaded, default to the first one
      setCurrentVideoId(recentVideos[0]?.id?.videoId);
    }
  }, [liveVideoId, recentVideos, isLiveLoading, currentVideoId]);

  function handlePlayVideo(videoId) {
    setCurrentVideoId(videoId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Determine if the currently playing video is the live one
  const isPlayingLive = isLive && currentVideoId === liveVideoId;

  const renderPlayer = () => {
    if (isLiveLoading && !recentVideos.length) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium tracking-wide">{t.loading}</p>
        </div>
      );
    }

    if (liveError && !recentVideos.length) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-red-500 space-y-2">
          <p className="text-lg font-medium">{t.error}</p>
        </div>
      );
    }

    if (currentVideoId) {
      const liveStreamUrl = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=0&rel=0&modestbranding=1`;
      return (
        <div className="w-full h-full relative group">
          <iframe
            src={liveStreamUrl}
            title="News Broadcast"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full absolute inset-0 rounded-xl shadow-2xl"
          ></iframe>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
        <FaYoutube size={48} />
        <p className="text-lg">{t.selectVideo}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Hero Section with Player */}
      <div className="relative bg-gray-50 pb-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                {isPlayingLive ? (
                  <span className="flex items-center gap-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                    <FaCircle size={6} /> {t.liveNow}
                  </span>
                ) : (
                  <span className="bg-gray-800 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {t.latestVideo}
                  </span>
                )}
                <span className="text-gray-500 text-xs sm:text-sm font-medium flex items-center gap-1">
                  <FaClock size={10} className="sm:w-3 sm:h-3" />{" "}
                  {new Date().toLocaleDateString(
                    language === "hi" ? "hi-IN" : "en-US",
                    {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                {isPlayingLive ? t.liveBroadcastTitle : t.studioTitle}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Player Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/5">
                {renderPlayer()}
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isPlayingLive ? t.breakingNewsTitle : t.topStoriesTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  {isPlayingLive ? t.liveDescription : t.topStoriesDescription}
                </p>
              </div>
            </div>

            {/* Playlist Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-full lg:max-h-[calc(100vh-12rem)] lg:sticky lg:top-24 shadow-sm">
                <div className="p-4 lg:p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                  <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                    <FaPlay className="text-red-600" size={14} />{" "}
                    {t.recentVideos}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                    {recentVideos.length} {t.videosCount}
                  </span>
                </div>

                <div className="lg:overflow-y-auto p-2 space-y-1 custom-scrollbar grow">
                  {isRecentLoading
                    ? [...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flex gap-3 p-3 rounded-xl animate-pulse"
                        >
                          <div className="w-24 h-16 bg-gray-200 rounded-lg"></div>
                          <div className="flex-1 space-y-2 py-1">
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))
                    : recentVideos.map((video, index) => {
                        const isSelected =
                          currentVideoId === video?.id?.videoId;
                        return (
                          <div
                            key={video.id.videoId || index}
                            onClick={() => handlePlayVideo(video?.id?.videoId)}
                            className={`group flex gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border border-transparent ${
                              isSelected
                                ? "bg-red-50 border-red-100 shadow-sm"
                                : "hover:bg-gray-50 hover:border-gray-100"
                            }`}
                          >
                            <div className="relative shrink-0 w-28 aspect-video rounded-lg overflow-hidden bg-gray-100 ring-1 ring-black/5">
                              <img
                                src={video.snippet.thumbnails.medium?.url}
                                alt={video.snippet.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div
                                className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                                  isSelected
                                    ? "opacity-100 bg-black/10"
                                    : "opacity-0 group-hover:opacity-100 bg-black/20"
                                }`}
                              >
                                <FaPlay
                                  className={`${
                                    isSelected ? "text-red-600" : "text-white"
                                  } drop-shadow-md`}
                                  size={12}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col justify-center min-w-0">
                              <h4
                                className={`text-sm font-medium leading-snug line-clamp-2 mb-1 ${
                                  isSelected
                                    ? "text-red-700"
                                    : "text-gray-800 group-hover:text-red-700"
                                }`}
                              >
                                {video.snippet.title}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {new Date(
                                  video.snippet.publishedAt
                                ).toLocaleDateString(
                                  language === "hi" ? "hi-IN" : "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                </div>

                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <Link
                    href="https://www.youtube.com/@apnewsbihar6217/videos"
                    target="_blank"
                    className="block w-full text-center py-2.5 rounded-lg bg-white hover:bg-gray-50 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 shadow-sm"
                  >
                    {t.viewArchives}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6 ring-1 ring-red-200">
            <FaUsers size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            {t.joinCommunityTitle}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {t.joinCommunityDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsJoinPopupOpen(true)}
              className="w-full sm:w-auto px-8 py-3 bg-red-700 text-white font-bold rounded-full hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
            >
              {t.joinTeam}
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-colors border border-gray-200 flex items-center justify-center gap-2">
              <FaShareAlt /> {t.share}
            </button>
            <Link
              href="https://www.youtube.com/@apnewsbihar6217"
              target="_blank"
              className="w-full sm:w-auto px-8 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all shadow-sm"
            >
              {t.subscribeYouTube}
            </Link>
          </div>
        </div>
      </div>

      {/* Join Team Popup */}
      <JoinTeamPopup
        isOpen={isJoinPopupOpen}
        onClose={() => setIsJoinPopupOpen(false)}
      />
    </div>
  );
};

export default LiveNewsPage;
